class reporting{

  async reportLog(logMsg,type,cucumberStep){ 
    
    type = type||'text/plain';
    cucumberStep.attach(logMsg,type); 
  
  }
  
  async reportMap(scenarioName,totalcnt,passcnt,failcnt){

    var reportHashMap=new Map();
    return new Promise(resolve =>{
      reportHashMap.set(scenarioName, totalcnt+'|'+passcnt+'|'+failcnt);        
      resolve(reportHashMap);        
    });

  }
    async reportScreenshot(cucumberStep) {
  
      cucumberStep.attach(await cucumberStep.takeScreenshot(), 'image/png');  

    };

} module.exports=reporting;