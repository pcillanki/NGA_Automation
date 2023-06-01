const report = require('wdio-cucumberjs-json-reporter')

class reporting{

  async reportLog(logMsg,type){ 
    
    type = type||'text/plain';
    report.attach(logMsg,type); 
  
  }
  
  async reportMap(scenarioName,totalcnt,passcnt,failcnt){

    var reportHashMap=new Map();
    return new Promise(resolve =>{
      reportHashMap.set(scenarioName, totalcnt+'|'+passcnt+'|'+failcnt);        
      resolve(reportHashMap);        
    });

  }
    async reportScreenshot(cucumberStep) {
  
      report.attach(await cucumberStep.takeScreenshot(), 'image/png');  

    };

} module.exports=reporting;