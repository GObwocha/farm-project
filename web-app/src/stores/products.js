import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'tomato.jpg'
            },
            1:{
                id: 2,
                name: "Banana",
                category: "Fruit",
                price: 120,
                availability: true,
                image: 'banana.jpg'
            },
            2:{
                id: 3,
                name: "Apple",
                category: "Fruit",
                price: 180,
                availability: true,
                image: 'apple.jpg'
            },
            3:{
                id: 4,
                name: "Carrot",
                category: "Vegetable",
                price: 90,
                availability: true,
                image: 'carrot.jpg'
            },
            4:{
                id: 5,
                name: "Lettuce",
                category: "Vegetable",
                price: 140,
                availability: true,
                image: 'lettuce.jpg'
            },
            5:{
                id: 6,
                name: "Cucumber",
                category: "Vegetable",
                price: 110,
                availability: true,
                image: 'cucumber.jpg'
            },
            6:{
                id: 7,
                name: "Strawberry",
                category: "Fruit",
                price: 250,
                availability: false,
                image: 'strawberry.jpg'
            },
            7:{
                id: 8,
                name: "Spinach",
                category: "Vegetable",
                price: 130,
                availability: true,
                image: 'spinach.jpg'
            },
            8:{
                id: 9,
                name: "Potato",
                category: "Vegetable",
                price: 80,
                availability: true,
                image: 'potato.jpg'
            },
            9:{
                id: 10,
                name: "Onion",
                category: "Vegetable",
                price: 100,
                availability: true,
                image: 'onion.jpg'
            },
            10:{
                id: 11,
                name: "Green Bell Pepper",
                category: "Vegetable",
                price: 160,
                availability: true,
                image: 'green-bell-pepper.jpg'
            }
        }
       
        const selectedProduct = ref(null)

        return{
            products, selectedProduct
        }
   },
   actions:{
        updateSelectedProduct(payload){
            this.selectedProduct = payload
       },
   },
   persist: true,
})