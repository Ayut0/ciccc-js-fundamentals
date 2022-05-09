/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name: "Yuto",
    friends : 300,
    messages : ["Summer is around the corner", "I wish I could stop getting caffeine", "I wanna visit U.S. again"],

    post: function postMessage(message){
        this.messages.push(message);
    },

    delete: function deleteMessage(index){
        this.messages.splice(index, 1);
    },

    add: function addFriend(){
        this.friends++;
    },

    remove: function removeFriend(){
        this.friends--;
    }
}

facebookProfile.post("aaa");
facebookProfile.delete(3);
facebookProfile.remove();
console.log(facebookProfile);
