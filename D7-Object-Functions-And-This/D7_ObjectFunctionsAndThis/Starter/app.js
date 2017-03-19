

var c = {
    name: "the c obj",
    log: function() {
        var self = this;
        self.name = "updated c obj"
        console.log(this);
        var setName = function(newName) {
            self.name = "updated again c obj"
        }
        setName();
        console.log(this)
    }
}

c.log()