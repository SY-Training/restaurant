function RecipePage() {

    const content = document.querySelector('#content');

    let para = `<p>Ingredients<br><br>

    450g/1lb self-raising flour<br>
    2 level tsp baking powder<br>
    50g/1¾oz caster sugar<br>
    100g/3½oz butter, softened, cut into pieces<br>
    2 free-range eggs<br>
    a little milk<br>
    handful sultanas (optional)<br><br>
    
    Method<br><br>

    Preheat the oven to 220C/200C Fan/Gas 7.
     Lightly grease two baking trays.<br><br>

    Put the flour, baking powder and sugar in a large bowl.
    Add the butter and rub in with your fingertips until the 
    mixture resembles fine breadcrumbs.<br><br>

    Crack the eggs into a measuring jug, then add enough milk to make the 
    total liquid 300ml/10fl oz. Stir the egg and milk into the flour – you may not 
    need it all – and mix to a soft, sticky dough.<br><br>

    Turn out onto a lightly floured work surface, knead lightly
     and work in the sultanas, if using. Roll out to a rectangle about 2cm/¾in thick.<br><br>

    Cut into as many rounds as possible with a fluted 5cm/2in
     cutter and place them on the prepared baking trays. 
     Brush the tops of the scones with a little extra milk, 
     or any egg and milk left in the jug.<br><br>

    Bake for 12–15 minutes, or until the scones are well risen and a pale, 
    golden-brown colour. Lift onto a wire rack to cool. Eat as fresh as possible.<br><br>

    To serve, split the scones and serve with strawberry jam 
    on the plain scones along with a good dollop of clotted cream.</p>`

    const guide = document.createElement('div');
    guide.setAttribute('class', 'guide');
    guide.innerHTML = para;
    content.appendChild(guide);

    
}

export default RecipePage;