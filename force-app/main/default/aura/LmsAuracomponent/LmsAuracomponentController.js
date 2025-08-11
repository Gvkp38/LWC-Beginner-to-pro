({
    handleChanged : function(component, event, helper) {
        
        alert(JSON.stringify(event.getParam("messagefromcompa")))
        //console.log(event.getParam("messagefromcompa"))
        if (event != null && event.getParam("messagefromcompa") != null) {
            component.set("v.Name", event.getParam("messagefromcompa").name);
            component.set("v.Age", event.getParam("messagefromcompa").age);
            console.log(event.getParam("messagefromcompa").name)
        }
        
    
    }
})
