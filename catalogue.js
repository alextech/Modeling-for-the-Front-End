var Catalogue = {
    init: function() {

    },

    load: function() {
        $.ajax({
            url: 'issues.html',
            type: 'get',
            success: function(data, textStatus, jqXHR) {
                $("#issuesContainer").html(data);


                this.registerDetailsModal();
            }.bind(Catalogue)
        })
    },

    registerDetailsModal: function() {
        $(".moreDetails").click(function(e) {
            console.log(e.target);
            var issueID = e.target.dataset.issueid;
            var description = $("#"+issueID+'DescriptionParagraph').html();

            $("#detailsModal .modal-body").html(description);
        });
    }
};
