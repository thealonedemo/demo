var data = document.getElementById('data');
var userList = document.getElementById('userList');

var counter = 0;
function addUser(){
    var inputdata = data.value;
   

    var html = '<div class="row mt-1" id="data'+counter+'">'+
                   
                '<div class="col-md-6">'+
                    '<input type="text" class="form-control" value="'+inputdata+'" disabled>'+
                '</div>'+

                '<div class="col-md-2">'+
                       '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
                '</div>'+

                '<div class="col-md-2">'+
                     '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
                '</div>'+

                '<div class="col-md-2">'+
                     '<button type="button" class="btn btn-danger" onclick="delet(this.id)" id="delete'+counter+'">Delete</button>'+
                '</div>'+

            '</div>';
            

            userList.insertAdjacentHTML('beforeend',html);
            counter++;
}
 
function edit(editId){
    var parent = document.getElementById(editId).parentNode.parentNode;
    var child = parent.firstChild.firstChild;
    child.removeAttribute('disabled');

}

function update(updateId){
    var parent = document.getElementById(updateId).parentNode.parentNode;
    var child = parent.firstChild.firstChild;
    child.setAttribute("disabled",'disabled');
    
}

function delet(deleteId){
    var parent = document.getElementById(deleteId).parentNode.parentNode;
   parent.remove();

}



