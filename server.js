var cluster = require('cluster');

var config = {
    numWorkers: require('os').cpus().length,
};

cluster.setupMaster({
    exec: "app.js"
});

for (var i = 0; i < config.numWorkers; i++)
    cluster.fork()
