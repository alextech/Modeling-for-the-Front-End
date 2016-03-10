var Issue =  function(node) {

    var domNode = node;
    var jqDomNode = $(node);  //best of both worlds

    // extract nodes
    var titleNode       = domNode.getElementsByTagName('h2')[0];
    var descriptionNode = domNode.getElementsByTagName('p')[0];
    var buttonNode      = domNode.querySelector('a'); // featuring fully flexible selector

    // extract initial values.
    var title       = titleNode.innerHTML;
    var description = descriptionNode.innerHTML;
    var priority    = buttonNode.classList[2];


    // utility variables - personal convention
    var currentPriorityClass = 'btn-default';

    var modalView = $("#detailsModal .modal-body");

    var detailsButtonClickHandler = function() {
        modalView.html(description);
    };

    var issueObj = {
        set id(id) {
            this._id = id;
        },

        get id() {
            return this._id;
        },

        set title(t) {
            title = t;
            titleNode.innerHTML = title;
        },

        get title() {
            return title;
        },

        set description(d) {
            description = d;
            descriptionNode.html(description); // just to show jQuery alternative
        },

        get description() {
            return description;
        },

        set priority(p) {
            priority = p;

            var priorityClass;
            if (priority.localeCompare("high") == 0) {
                priorityClass = "btn-danger"
            } else if (priority.localeCompare("medium") == 0) {
                priorityClass = "btn-warning"
            } else if (priority.localeCompare("low") == 0) {
                priorityClass = "btn-info"
            } else {
                priorityClass = "btn-default"
            }

            buttonNode.classList.remove(currentPriorityClass);
            buttonNode.classList.add(priorityClass);
            currentPriorityClass = priorityClass;
        },

        getDomNode: function() {
            return domNode;
        }
    };

    buttonNode.addEventListener('click', detailsButtonClickHandler);

    return issueObj;
};
