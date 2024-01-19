import { defineStore } from "pinia";

export const useContactStore = defineStore({
    id: "contact",
    state: () => ({
        contacts: [
            {
                name: "Police",
                number: "17",
            },
            {
                name: "Maxence",
                number: "0651871659",
            },
            {
                name: "Maman Maxence",
                number: "0613809438",
            },
            {
                name: "Auto école",
                number: "0142040842",
            },
            {
                name: "Nestor Belicard",
                number: "0632039167",
            },
        ],
    }),
    actions: {
        addContact(contact) {
            this.contacts.push(contact);
        },
    },
})