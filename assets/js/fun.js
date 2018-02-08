var project_status = null;
var client = null;
var coffee = null;
var work = null;
var self = null;

function startProject() {
    project_status = "start";
    coffee = true;
    work = true;

    if (coffee == true && work == true) {
        project_status = "finished";
        client = "happy";
    }
    if (project_status == "finished" && client == "happy") {
        self = "expressed";
    }
}

startProject();
console.log("If client is " + client + " -" + " self is " + self);

