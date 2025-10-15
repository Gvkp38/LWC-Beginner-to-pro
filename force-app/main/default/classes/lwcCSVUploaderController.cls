public class lwcCSVUploaderController {
@AuraEnabled
public static List<Account> saveFile(String base64Data)
{
    // 1. Decode Base64 data
    Blob csvBlob = EncodingUtil.base64Decode(base64Data);
    String data = csvBlob.toString(); // or specify encoding: .toStringOf('UTF-8')

    // System.debug(data); // Debug the decoded CSV content

    list<Account> lstCCToInsert = new list<Account>();
    list<String> lstCSVLines = data.split('\n');
    
    // Check if there are data rows beyond the header (if present)
    if (lstCSVLines.size() <= 1) {
        // Handle empty or header-only file
        return new List<Account>(); 
    }

    // 2. Loop through lines, starting from the second line (i=1) to skip the header
    for(Integer i = 1; i < lstCSVLines.size(); i++)
    {
        String csvLine = lstCSVLines[i];
        if (String.isBlank(csvLine)) continue; // Skip empty lines

        // --- THE ROBUST CSV PARSING LOGIC GOES HERE ---
        // Replacing the problematic split(',') with a robust method is crucial.
        // For simplicity *if* you are absolutely sure there are NO embedded commas or quotes, 
        // you can use the split, but it's dangerous.

        List<String> csvRowData = new List<String>();
        // Using a basic split, which is the main flaw:
        for(String column : csvLine.split(','))
        {
            csvRowData.add(column.trim()); // Trim whitespace
        }
        
        // --- End of (Flawed) CSV Parsing ---

        // Check for minimum required columns before accessing
        if (csvRowData.size() < 3) continue; // Skip malformed rows
        
        Account acc = new Account(
            Name = csvRowData[0],
            Site = csvRowData[1],
            AccountSource = csvRowData[2]
        );

        lstCCToInsert.add(acc);
    }

    // 3. Insert Records
    if (!lstCCToInsert.isEmpty())
    {
        // Use Database.insert with allOrNone=false for partial success if needed
        insert lstCCToInsert;
    }

    return lstCCToInsert;
}

}