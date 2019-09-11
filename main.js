//function addItem(){
   //1 listen to form  X
    //add a item to the list (User: types - Dev: collects inpiut  get value from filed
    //adding a box underneath the last item
    // 2 manipulate Dom
    //In terms of DOM -> add a child to class called shopping-list
    //read input X
    //return value X
    // get infor from button
        //when button is pressed, add check box [CSS]
    //listen for Delete button
        //remove that item [CSS]
    
    
    
console.log('hello');

function addItem(){
    $('#js-shopping-list-form').submit(event => {
        //preventDefaultAction
        event.preventDefault();
        let item = $('#shopping-list-entry').val() ;
        let listItem = `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        console.log(item);
        $('.shopping-list').append(listItem) 
        $('#shopping-list-entry').val('') ;
    })
$('ul').on('click', 'button.shopping-item-toggle', function(event) {
    $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });

$('ul').on('click', 'button.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
}
$(addItem) 
