var Catalogue = {
    init: function() {

    },

    load: function() {
        $.ajax({
            url: 'issues.json',
            type: 'get',
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                var html = '<div class="row">';
                for(var i = 0; i < data.issues.length; i++) {
                    var issue = data.issues[i];
                    console.log(issue);

                    var priorityClass;
                    if(issue.priority.localeCompare("high") == 0) {
                        priorityClass = "btn-danger"
                    } else if(issue.priority.localeCompare("medium") == 0) {
                        priorityClass = "btn-warning"
                    } else if(issue.priority.localeCompare("low") == 0) {
                        priorityClass = "btn-info"
                    } else {
                        priorityClass = "btn-default"
                    }

                    html += '<div class="col-md-4">' +
                                '<h2>'+issue.title+'</h2>' +
                                '<p id="'+issue.id+'DescriptionParagraph">'+issue.description+'</p>' +
                                '<p><a class="btn '+priorityClass+' moreDetails" href="#" role="button" data-issueID="'+issue.id+'" data-toggle="modal" data-target="#detailsModal">View details &raquo;</a></p>' +
                            '</div>';

                }
                html += '</div>';

                $("#issuesContainer").html(html);


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
