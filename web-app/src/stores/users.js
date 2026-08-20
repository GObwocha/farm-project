import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
 

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id:1,
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                phone: "123-456-7890",
                location: "New York",
                address: "123 Main St, New York, NY 10001"

            },
            1:{
                id:2,
                firstName: "Jupiter",
                lastName: "Doe",
                email: "jupier.doe@example.com",
                phone: "678-456-7890",
                location: "New hampshire",
                address: "54 Main St, New hampshire, NH 03001"

            },
            2:{
                id:3,
                firstName: "Jamie",
                lastName: "Samuel",
                email: "jamie.samuels@example.com",
                phone: "987-654-3210",
                location: "New Jersey",
                address: "23 Main St, New Jersey, NJ 08001"

            },
            3:{
                id:4,
                firstName: "Jane",
                lastName: "Kimani",
                email: "jane.kimani@example.com",
                phone: "612-345-6789",
                location: "Newzealand",
                address: "63 Main St, Newzealand, NZ 0000"

            },
            4:{
                id:5,
                firstName: "Julie",
                lastName: "Bett",
                email: "julie.bett@example.com",
                phone: "2678-567-890",
                location: "New Orleans",
                address: "183 Main St, New Orleans, LA 70112"

            },
            5:{
                id:6,
                firstName: "Jackie",
                lastName: "Mutai",
                email: "jackie.mutai@example.com",
                phone: "0789065789",
                location: "Nairobi",
                address: "144 Main St, Nairobi, KE 00100"

            },

        }

        return{
            users
        }
   },
   actions:{
       addUser(payload) {
            //get the last key in the users object
            const existingKeys = Object.keys(this.users).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;

            //insert into object
            this.users[nextKey] = {
                ...payload,
                id: nextKey
            };
        },
        editUser(id, payload) {
            // find the book in the object
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id //compare the ids
            );

            if (!user) {
                console.error(`No user found with id: ${id}`);
                return;
            }

            const [objectKey] = user;

            //replace the existing user data with what was received in payload
            this.users[objectKey] = {
                ...this.users[objectKey], 
                ...payload
            };
        },
        deleteUser(id) {
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id
            );
            if (!user) {
                console.error(`Cannot delete: No user found id: ${id}`);
                return;
            }

            const [objectKey] = user;

            delete this.users[objectKey];
        }
   },
   persist: true,
})