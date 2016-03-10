var Issue =  function() {

    var domNode;
    var jqDomNode;  //best of both worlds

    // utility variables - personal convention
    var currentPriorityClass = 'btn-default';

    var modalView = $("#detailsModal .modal-body");

    var issueObj = {
        init: function () {
            jqDomNode = $($("#issueTemplate").html());
            domNode = jqDomNode.get(0);

            // define node pointers
            this.titleNode = domNode.getElementsByClassName('issueTitle')[0];
            this.descriptionNode = jqDomNode.find(".issueDescription");  // just to show jQuery alternative
            this.buttonNode = domNode.getElementsByClassName('moreDetails')[0];

            // attach handlers
            this.buttonNode.addEventListener('click', this.detailsButtonClickHandler.bind(this));
        },

        set id(id) {
            this._id = id;
        },

        set title(title) {
            this._title = title;
            this.titleNode.innerHTML = title;
        },

        set description(description) {
            this._description = description;
            this.descriptionNode.html(description); // just to show jQuery alternative
        },

        set priority(priority) {
            this._priority = priority;

            if (this._priority.localeCompare("high") == 0) {
                this._priorityClass = "btn-danger"
            } else if (this._priority.localeCompare("medium") == 0) {
                this._priorityClass = "btn-warning"
            } else if (this._priority.localeCompare("low") == 0) {
                this.priorityClass = "btn-info"
            } else {
                this.priorityClass = "btn-default"
            }

            this.buttonNode.classList.remove(currentPriorityClass);
            this.buttonNode.classList.add(this._priorityClass);
            currentPriorityClass = this.priorityClass;
        },

        detailsButtonClickHandler: function() {
            modalView.html(this._description);
        },

        getDomNode: function() {
            return domNode;
        }
    };

    issueObj.init();
    return issueObj;
};
