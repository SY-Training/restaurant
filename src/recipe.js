function RecipePage() {

    const content = document.querySelector('#content');

    let para = `<p>Ingredients\n\n

    450g/1lb self-raising flour\n
    2 level tsp baking powder\n
    50g/1¾oz caster sugar\n
    100g/3½oz butter, softened, cut into pieces\n
    2 free-range eggs\n
    a little milk\n
    handful sultanas (optional)\n\n
    
    Method\n\n

    Preheat the oven to 220C/200C Fan/Gas 7.
     Lightly grease two baking trays.\n

    Put the flour, baking powder and sugar in a large bowl.
    Add the butter and rub in with your fingertips until the 
    mixture resembles fine breadcrumbs.\n

    Crack the eggs into a measuring jug, then add enough milk to make the 
    total liquid 300ml/10fl oz. Stir the egg and milk into the flour – you may not 
    need it all – and mix to a soft, sticky dough.\n

    Turn out onto a lightly floured work surface, knead lightly
     and work in the sultanas, if using. Roll out to a rectangle about 2cm/¾in thick.\n

    Cut into as many rounds as possible with a fluted 5cm/2in
     cutter and place them on the prepared baking trays. 
     Brush the tops of the scones with a little extra milk, 
     or any egg and milk left in the jug.\n

    Bake for 12–15 minutes, or until the scones are well risen and a pale, 
    golden-brown colour. Lift onto a wire rack to cool. Eat as fresh as possible.\n

    To serve, split the scones and serve with strawberry jam 
    on the plain scones along with a good dollop of clotted cream.</p>`

    const guide = document.createElement('div');
    guide.setAttribute('class', 'guide');
    guide.innerHTML = para;
    content.appendChild(guide);

    
}

export default RecipePage;