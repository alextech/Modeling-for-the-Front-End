var Issue = function(raw) {

    // looks boring and tedious here but in reality huge opportunity for default value,
    // validation, result manipulation to fit frontend needs from server response.
    // Very valuable when consider that this same object can be created same way from other sources
    // such as forms.
    this.id  = raw.id;
    this.title = raw.title;
    this.description = raw.description;
    this.priority = raw.priority;
};

Issue.prototype.toString = function () {
    if(this.priority.localeCompare("high") == 0) {
        this.priorityClass = "btn-danger"
    } else if(this.priority.localeCompare("medium") == 0) {
        this.priorityClass = "btn-warning"
    } else if(this.priority.localeCompare("low") == 0) {
        this.priorityClass = "btn-info"
    } else {
        this.priorityClass = "btn-default"
    }

    return '<div class="col-md-4">' +
                '<h2>'+this.title+'</h2>' +
                '<p>'+this.description+'</p>' +
                '<p><a class="btn '+this.priorityClass+' moreDetails" href="#" role="button" data-toggle="modal" data-target="#detailsModal">View details &raquo;</a></p>' +
            '</div>';
};
