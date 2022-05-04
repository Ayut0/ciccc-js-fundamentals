/*
A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunit.

Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. 
Here's what we know! In this murder mystery there are:

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...

- the poison belongs to the ballroom,
- the trophy belongs to the gallery,
- the pool stick belongs to the billiards room,
- and the knife belongs to the dining room.

And we know that each suspect was located in a specific room at the time of the murder:
- Mr. Parkes was located in the dining room.
- Ms. Van Cleve was located in the gallery.
- Mrs. Sparr was located in the billiards room.
- Mr. Kalehoff was located in the ballroom.

To help solve this mystery, write a combination of conditional statements that:

- sets the value of weapon based on the room and
- sets the value of solved to true if the value of room matches the suspect's room

Afterwards, use this template to print a message to the console if the mystery was solved:

__________ did it in the __________ with the __________!

What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:

Mr. Parkes did it in the dining room with the knife!
*/


let suspect;
let weapon;
let room;
let solve = false;

const aMurderMystery = (room, suspect) =>{
    if((room == "the ballroom" && suspect == "Mr. kalehoff")){
        weapon = "the poison"
        solve = true
    }else if((room == "gallery" && suspect == "Ms. Van Cleve")){
        weapon = "the trophy"
        solve = true;
    }else if((room == "billiards room" && suspect == "Mrs. Sparr")){
        weapon = "the pool stick"
        solve = true;
    }else if((room == "dining room" && suspect == "Mr. Parkes")){
        weapon = "the knife"
        solve = true;
    }

    if(solve){
        console.log(`${suspect} did it in the ${room} with the ${weapon}`);
    }else{
        console.log("This mystery is impossible to solve");
    }
}

aMurderMystery("dining room", "Mr. Parkes");
aMurderMystery("gallery", "Ms. Van Cleve");
aMurderMystery("billiards room", "Mrs. Sparr");
aMurderMystery("dining room", "Mr. Parkes");
aMurderMystery("dining room", "anonymous");



