/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
function addTask(){
    alert("aguacate");
    
}
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    let tasks=[];
    let taskid=0;
    if (localStorage.getItem("tasks")!=null){
        tasks=JSON.parse(localStorage.getItem("tasks"));
        for (let i = 0;i<tasks.length;i++){
            //alert(tasks[i]);
            $("#llista").append('<li id="task">'+tasks[i]+'<button id="borrar">- BORRAR</button></li>');
        }
        $(".ui-listview").listview("refresh");
    }

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    
    
    $("#addbutton").click(function(){
        let taskInput = $("#newtask").val();
        $("#llista").append('<li id="task'+taskid+'">'+taskInput+'<button id="borrar'+taskid+'">- BORRAR</button></li>');
        tasks.push(taskInput);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        alert(tasks);
        $("#borrar"+taskid).click(function(){
            $("#task"+taskid).remove();
        });
        $(".ui-listview").listview("refresh");
        taskid=taskid+1;
    });
}
