// class Node {
//   constructor(data, next = null, prev = null) {
//     this.data = data;
//     this.next = next;
//     this.prev = prev
//   }
// }
// class Stack {
//   constructor() {
//     this.head = null;
//     this.current = null;
//   }

//   push(){
//     let res = document.getElementById('res');
//     let data = document.getElementById('data').value;
//     if(!this.head){
//       this.head = this.current = new Node(data);
//     }else{
//       let tmp = this.head;
//       this.head = new Node(data,null,tmp);
//       tmp.next = this.head;
//     }
// //  res.innerHTML = '<img src="'+this.head.data+'" >';
//      res.innerHTML = '<audio controls><source src="'+this.head.data+'"></audio>';

//     }
//     up(){
//       if(this.current && this.current.next){
//       this.current = this.current.next;
//     }
//   }
//     down(){
//       if(this.current && this.current.prev){
//       this.current = this.current.prev;
//     }
//   }
//   showCurrent() {
//     if (this.current)
//     // res.innerHTML = '<img src="'+this.current.data+'" >';
//     res.innerHTML = '<audio controls><source src="'+this.current.data+'"></audio>';
    
    
//   }

// }
// let ll = new Stack();

// function push(){
//   ll.push();
//   ll.showCurrent()
// }

// function up(){
//   ll.up();
//   ll.showCurrent()

// }

// function down(){
//   ll.down();
//   ll.showCurrent()

// }

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.current = null;
  }

  push(data){
    if(!this.head){
      this.head = this.current = new Node(data);
    }else{
      let tmp = this.head;
      this.head = new Node(data,null,tmp);
      tmp.next = this.head;
    }
    // res.innerHTML = '<img src="'+this.head.data+'" >';

    }
    PopFromList()
   {
      if (this.head && this.head === this.current) {
            this.current = this.head.prev;
        }
        if (this.head && this.head.prev) {
            this.head = this.head.prev;
            this.head.next = null;
        } else {
            this.head = this.current = null;

        }
 }
    dequeue(){
      if(!this.head.prev){
        this.head = this.current = null;
      }
      let tmp = this.head;
    while(tmp.prev && tmp.prev.prev){
      tmp = this.current = tmp.prev;
    }
    tmp.prev = null;
    }

  
    up(){
      if(this.current && this.current.next){
      this.current = this.current.next;
    }
  }
    down(){
      if(this.current && this.current.prev){
      this.current = this.current.prev;
    }
  }
  showCurrent() {
    if (this.current)
    // res.innerHTML = '<img src="'+this.current.data+'" >';
    return this.current.data;
        
  }
  
}

let ll = new Stack();

function push(){
  let dtl = {
    url: document.getElementById('data').value,
    nom: document.getElementById('nom').value,
    alb: document.getElementById('alb').value,
    grn: document.getElementById('grn').value,

  };
  ll.push(dtl);
  show();
}

function show(){
  document.getElementById("audio").src = ll.showCurrent().url ;
  document.getElementById("name").innerHTML = ll.showCurrent().nom ;
  document.getElementById("album").innerHTML = ll.showCurrent().alb;
  document.getElementById("genre").innerHTML = ll.showCurrent().grn;

}

function up(){
  ll.up();
  show();

}

function down(){
  ll.down();
  show();

}
function PopFromList(){
  ll.PopFromList();
  show();
}
function dequeue(){
  ll.dequeue();
  show();
}