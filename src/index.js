
import { default as UI } from 'UI';
import { ModuleStack } from 'Modules';
import CookieStack from 'CookieStack';
import Network from 'Network';
import Reader from 'Reader';
import TimerStack from 'TimerStack';
import 'styles/basic.css';

const Basic = {
    UI,
    System: {
        Network,
        Reader,
        TimerStack,
        CookieStack,
        ModuleStack
    }
};

export default Basic;
  
export function App(dependencies){
    var dep = dependencies;
    if (!dep || (!dep.length)) {
        
        var dependencies = []
    }
    if (typeof dep === "string") {
        if (Basic.System[dep]) {
            dependencies.push(dep);
        }
    }
    if (dependencies.length == 0){
        var c;
        for (c in Basic.System){
            dependencies.push(c);
        }
    }
    return dependencies.reduce(function(m,e,i,a){
        m[e]=(Basic.System[e]) ? new Basic.System[e]() : "unknown symbol "+e;
        return m;
    },{});
}