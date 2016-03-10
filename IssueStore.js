var IssueStore = {
    url: 'issues.json',

    init: function() {
        this.issues = null;
        this.idIndex = {};
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
                    var issue = new Issue();

                    var issueRaw = response.issues[i];
                    // can be automated with for-in loop
                    issue.id    = issueRaw.id;
                    issue.title = issueRaw.title;
                    issue.priority    = issueRaw.priority;
                    issue.description = issueRaw.description;

                    this.issues.push(issue);

                    // Indexing useful for arbitrary lookup without complex filters
                    // no worries about wrong objects because these are just pointers
                    this.idIndex[issue.id] = issue;
                }
            }.bind(IssueStore)
        }).then(function() {
            return this.issues;
        }.bind(IssueStore));


        return promise;
    },

    /**
     *
     * @param id
     * @returns {Issue}
     */
    getIssueById: function(id) {
        // check if exists locally, otherwise do another ajax requests to be sure its really not there

        // lazy demo
        if(this.idIndex.hasOwnProperty(id)) {
            return this.idIndex[id];
        } else {
            // your style of caching fallback
        }
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