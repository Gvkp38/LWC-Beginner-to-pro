public with sharing class caseControllerclass {
    @AuraEnabled(cacheable=true)
    public static list<case> caseControllerMethod(){
       list<case> caselist=[select id,casenumber,subject,Origin,OwnerId from case limit 10];
       return caselist;
    }
}