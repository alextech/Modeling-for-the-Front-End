var Catalogue = {
    init: function() {

    },

    load: function() {
        IssueStore.getAllIssues().done(function(issues) {
            var html = '<div class="row">';
            for(var i = 0; i < issues.length; i++) {
                if(i % 3 == 0 && i > 0) {
                    html += '</div><div class="row">';
                }
                html += issues[i];
            }
            html += '</div>';


            $("#issuesContainer").html(html);


            this.registerDetailsModal();
        }.bind(Catalogue));


    },

    registerDetailsModal: function() {
        $(".moreDetails").click(function(e) {
            console.log(e.target);
            var issueID = e.target.dataset.issueid;
            var description = IssueStore.getIssueById(issueID).description; // OH LOOK! ACCURATE CODE COMPLETION IN JS??!!

            $("#detailsModal .modal-body").html(description);
        });
    }
};
