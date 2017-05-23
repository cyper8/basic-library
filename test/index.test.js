/* global describe, it, expect, app */
import { App } from 'Basic';
var myApp = App([]);
describe("Basic library", function(){
    it("creates a Global Object",function(){
       expect(App).toBeDefined(); 
    });
    it("has Network subsystem", function(){
        expect(myApp.Network).toBeDefined();
    });
    it("has Cookies subsystem", function(){
        expect(myApp.CookieStack).toBeDefined();
    });
    it("has Reader subsystem", function(){
        expect(myApp.Reader).toBeDefined();
    });
    it("has Timers subsystem", function(){
        expect(myApp.TimerStack).toBeDefined();
    });
    it("has Modules subsystem", function(){
        expect(myApp.ModuleStack).toBeDefined();
    });
});