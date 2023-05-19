const app = Vue.createApp({
    data() {
    
      return {
        locations: [

          {
            name: 'Юрта',
            text: 'Мест для размещения: 5',
            img: './pic/loc5.jpg',
            desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dignissimos earum explicabo quas laudantium! Dolore, fugit voluptatem? Nam impedit et quam, veniam praesentium necessitatibus sequi? Adipisci molestias modi sint quasi.
            Nesciunt et aspernatur numquam est enim id, suscipit iure dolores minima eveniet repellat. Aliquid sed, accusamus maiores, consequatur rem quo expedita atque voluptatem enim quaerat porro alias dolore ducimus vero!st populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
          },
          {
            name: 'Палатка',
            text: 'Мест для размещения: 2',
            img: './pic/loc3.jpg',
            desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dignissimos earum explicabo quas laudantium! Dolore, fugit voluptatem? Nam impedit et quam, veniam praesentium necessitatibus sequi? Adipisci molestias modi sint quasi.
            Nesciunt et aspernatur numquam est enim id, suscipit iure dolores minima eveniet repellat. Aliquid sed, accusamus maiores, consequatur rem quo expedita atque voluptatem enim quaerat porro alias dolore ducimus vero! one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
          },
           {
            name: 'Домик',
            text: 'Мест для размещения: 8',
            img: './pic/loc4.jpg',
            desc: `Lorem ipsum dolor sit,amet consectetur adipisicing elit. Corrupti dignissimos earum explicabo quas laudantium! Dolore, fugit voluptatem? Nam impedit et quam, veniam praesentium necessitatibus sequi? Adipisci molestias modi sint quasi.
            Nesciunt et aspernatur numquam est enim id, suscipit iure dolores minima eveniet repellat. Aliquid sed, accusamus maiores, consequatur rem quo expedita atque voluptatem enim quaerat porro alias dolore ducimus vero!`
          },
           
          {
            name: 'Экошатер',
            text: 'Мест для размещения: 4',
            img: './pic/loc1.jpg',
            desc: `Lorem ipsumdolor sit, amet consectetur adipisicing elit. Corrupti dignissimos earum explicabo quas laudantium! Dolore, fugit voluptatem? Nam impedit et quam, veniam praesentium necessitatibus sequi? Adipisci molestias modi sint quasi.
            Nesciunt et aspernatur numquam est enim id, suscipit iure dolores minima eveniet repellat. Aliquid sed, accusamus maiores, consequatur rem quo expedita atque voluptatem enim quaerat porro alias dolore ducimus vero!`
          },
        
        ]
      }
    }
  })
  
  app.component("place", {
    props: ['location'],
    template: "#place"
  });
  
  app.mount('#app')
  