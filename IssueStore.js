var IssueStore = {
    url: 'issues.json',

    init: function() {
        this.issues = null;

    },

    // these act as API proxies and can take parameters to be passed up to server
    // helps to collect together properties and API specific options
    getAllIssues: function() { // maybe optional parameter to force reload or cached
        var promise = $.ajax({
            url: this.url,
            type: 'get',
            dataType: 'json',
            success: function (response, textStatus, jqXHR) {
                this.issues = [];
                for(var i = 0; i<response.issues.length; i++) {
                    this.issues.push(new Issue(response.issues[i]))
                }
            }.bind(IssueStore)
        }).then(function() {
            return this.issues;
        }.bind(IssueStore));


        return promise;
    },

    // other interesting parameters
    filterByPriority: function(priority) {

    },

    // CRUD
    updateIssue: function(issue) {

    },

    deleteIssue: function(id) {

    },

};

IssueStore.init();