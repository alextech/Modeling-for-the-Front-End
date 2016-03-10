var Catalogue = {
    init: function() {

    },

    load: function() {
        IssueStore.getAllIssues().done(function(issues) {
            var issuesContainerNode = document.getElementById("issuesContainer");
            while (issuesContainerNode.firstChild) {
                issuesContainerNode.removeChild(issuesContainerNode.firstChild);
            }

            var rowNode = document.createElement('div');
            rowNode.classList.add('row');

            for(var i = 0; i < issues.length; i++) {
                if(i % 3 == 0 && i > 0) {
                    issuesContainerNode.appendChild(rowNode);
                    rowNode = document.createElement('div');
                    rowNode.classList.add('row');
                }
                rowNode.appendChild(issues[i].getDomNode());
            }

            issuesContainerNode.appendChild(rowNode)
        }.bind(Catalogue));


    }
};
