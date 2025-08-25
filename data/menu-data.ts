export type MenuItem = {
    section: "specials" | "lunch" | "dinner" | "drinks"
    category?: string;
    subCategory?: string;
    name: string;
    price?: string;
    desc?: string;
    tags?: string[];
    specialDate?: string;
    sortOrder?: number;
}



const menuData: MenuItem[] = [
  // =========================
  // SUMMER DINNER MENU
  // =========================
  { section: "dinner", category: "Cheese & Charcuterie Platters", name: "Truffle Cheese Platter", price: "$19", desc: "Black truffles sheep’s milk cheese, seasonal fruits & nuts, crostini", sortOrder: 1 },
  { section: "dinner", category: "Cheese & Charcuterie Platters", name: "Cheesemonger’s Delight (Small)", price: "$29", desc: "Selection of cheeses from around the globe, seasonal fruits, roasted nuts, crostini", sortOrder: 2 },
  { section: "dinner", category: "Cheese & Charcuterie Platters", name: "Cheesemonger’s Delight (Large)", price: "$35", desc: "Five-cheese selection, seasonal fruits, roasted nuts, crostini", sortOrder: 3 },
  { section: "dinner", category: "Cheese & Charcuterie Platters", name: "Plateaux Délice (Large)", price: "$35", desc: "Salumi & cured meats with three cheeses, mustard, cornichons, marinated vegetables, fruits, roasted nuts", sortOrder: 4 },
  { section: "dinner", category: "Cheese & Charcuterie Platters", name: "Antipasto Platter (Small)", price: "$28", desc: "Prosciutto, salami, mortadella, marinated vegetables & olives, assorted cheeses, truffle oil & balsamic", sortOrder: 5 },
  { section: "dinner", category: "Cheese & Charcuterie Platters", name: "Parma", price: "$19", desc: "Prosciutto di Parma, mustard, cornichons, marinated olives, roasted nuts, crostini", sortOrder: 6 },

  { section: "dinner", category: "Appetizers", name: "Baked Brie", price: "$15", desc: "Puff pastry; choice of lingonberry, apple, cranberry, strawberry, or white Armenian cherry", sortOrder: 1 },
  { section: "dinner", category: "Appetizers", name: "Arancini", price: "$15", desc: "Rice balls stuffed with mozzarella; marinara & parmesan", sortOrder: 2 },
  { section: "dinner", category: "Appetizers", name: "Truffle Mac & Cheese Bites", price: "$16", desc: "White truffle oil, truffle pecorino, cheddar, gruyère, mozzarella", sortOrder: 3 },
  { section: "dinner", category: "Appetizers", name: "Gambas al Ajillo", price: "$16", desc: "Pan-seared shrimp, garlic–lemon cream, herbs, toasted bread", sortOrder: 4 },
  { section: "dinner", category: "Appetizers", name: "Prosciutto-Wrapped Mozzarella Sticks", price: "$12", desc: "House-made marinara", sortOrder: 5 },
  { section: "dinner", category: "Appetizers", name: "Escargot de Bourgogne", price: "$15", desc: "Garlic–parsley butter, red wine, toasted bread", sortOrder: 6 },
  { section: "dinner", category: "Appetizers", name: "Chicken Wings", price: "$16", desc: "Crispy, juicy wings; choice of sweet chili, blue cheese, or buttermilk ranch", sortOrder: 7 },
  { section: "dinner", category: "Appetizers", name: "Sirloin Beef Meatballs", price: "$14", desc: "House-made; baked in marinara; toasted garlic bread", sortOrder: 8 },
  { section: "dinner", category: "Appetizers", name: "Truffle French Fries", price: "$12", desc: "White truffle oil, truffle cheese", sortOrder: 9 },
  { section: "dinner", category: "Appetizers", name: "Tomato & Herb Salad", price: "$12", desc: "Ripe tomatoes, dill, parsley, black pepper, lemon, olive oil", sortOrder: 10 },

  { section: "dinner", category: "Soups", name: "French Onion Soup", price: "$12", desc: "Caramelized onions, crostini, melted cheese blanket", sortOrder: 1 },
  { section: "dinner", category: "Soups", name: "New England Clam Chowder", price: "$12", desc: "Clams, potatoes, onions, cream, bacon, herbs", sortOrder: 2 },
  { section: "dinner", category: "Soups", name: "Broccoli & Cheddar", price: "$12", desc: "Sharp cheddar, broccoli, garlic, carrots, cream", sortOrder: 3 },
  { section: "dinner", category: "Soups", name: "Chicken & Pasta Soup", price: "$11", desc: "Chicken broth, chicken, potatoes, carrots, onions, fresh herbs", sortOrder: 4 },
  { section: "dinner", category: "Soups", name: "Lobster Bisque", price: "$13", sortOrder: 5 },
  { section: "dinner", category: "Soups", name: "Italian Wedding Soup", price: "$12", sortOrder: 6 },

  { section: "dinner", category: "Salads", name: "Caesar", price: "$12", desc: "Romaine hearts, parmesan, garlic croutons, creamy dressing, optional anchovies", sortOrder: 1 },
  { section: "dinner", category: "Salads", name: "Truffle Kale Salad", price: "$13", desc: "Shaved truffle cheese & parmesan, truffle oil, cherry tomatoes, crispy chickpeas, lemon–garlic dressing", sortOrder: 2 },
  { section: "dinner", category: "Salads", name: "Greek Salad", price: "$13", desc: "Mixed greens, onions, tomatoes, black olives, Greek cheese, dressing", sortOrder: 3 },
  { section: "dinner", category: "Salads", name: "Zesty Beet Salad", price: "$13", desc: "Mixed greens, roasted beets, caramelized nuts, goat cheese, balsamic–orange vinaigrette", sortOrder: 4 },

  { section: "dinner", category: "Entrées", name: "Gnocchi alla Sorrentini", price: "$28", desc: "Baked with tomato–basil sauce, mozzarella, pecorino", sortOrder: 1 },
  { section: "dinner", category: "Entrées", name: "Shrimp Scampi", price: "$28", desc: "Garlic butter–lemon sauce, parmesan, pasta", sortOrder: 2 },
  { section: "dinner", category: "Entrées", name: "Sirloin Meatballs", price: "$24", desc: "Homemade sirloin meatballs, Italian pasta, marinara, parmesan", sortOrder: 3 },
  { section: "dinner", category: "Entrées", name: "Beef Stroganoff", price: "$28", desc: "Sautéed sirloin (or chicken), onions, mushrooms, cream sauce, pasta", sortOrder: 4 },

  { section: "dinner", category: "Desserts", name: "Crêpe Sucrée", price: "$14", desc: "Choice of Nutella, honey, or white cherry preserve; whipped cream. Add fruit +$3 (banana, strawberry, apple, or available)", sortOrder: 1 },
  { section: "dinner", category: "Desserts", name: "Bananas Foster", price: "$16", desc: "Carrot cake topped with bananas sautéed in sweet butter & banana liqueur, vanilla ice cream, whipped cream", sortOrder: 2 },
  { section: "dinner", category: "Desserts", name: "Belgian Triple Chocolate Cake", price: "$12", desc: "Whipped cream", sortOrder: 3 },
  { section: "dinner", category: "Desserts", name: "Carrot Cake", price: "$12", desc: "Whipped cream", sortOrder: 4 },
  { section: "dinner", category: "Desserts", name: "Chocolate Lava Cake", price: "$14", desc: "Vanilla ice cream, whipped cream", sortOrder: 5 },
  { section: "dinner", category: "Desserts", name: "Chocolate Trilogy", price: "$12", desc: "Whipped cream & strawberry", sortOrder: 6 },
  { section: "dinner", category: "Desserts", name: "Red Velvet Cake", price: "$12", desc: "Whipped cream", sortOrder: 7 },
  { section: "dinner", category: "Desserts", name: "Vanilla Ice Cream", price: "$6", desc: "Scoops of golden vanilla, whipped cream", sortOrder: 8 },

  // =========================
  // LUNCH
  // =========================
  { section: "lunch", category: "Smoothies", name: "Raspberry Smoothie", price: "$8.98", desc: "Raspberry, vanilla ice cream", sortOrder: 1 },
  { section: "lunch", category: "Smoothies", name: "Strawberry Smoothie", price: "$8.98", desc: "Strawberries, vanilla ice cream", sortOrder: 2 },
  { section: "lunch", category: "Smoothies", name: "Banana & Strawberry Smoothie", price: "$8.98", desc: "Banana–strawberry blend, vanilla ice cream", sortOrder: 3 },
  { section: "lunch", category: "Smoothies", name: "Lingonberry Smoothie", price: "$8.98", desc: "Lingonberries, vanilla ice cream", sortOrder: 4 },

  { section: "lunch", category: "Lunch Appetizers", name: "Baked Brie", price: "$15", desc: "Puff pastry; lingonberry, apple, cranberry, strawberry, or white Armenian cherry", sortOrder: 1 },
  { section: "lunch", category: "Lunch Appetizers", name: "Meat Arancini", price: "$15", desc: "Rice & meat balls, marinara", sortOrder: 2 },
  { section: "lunch", category: "Lunch Appetizers", name: "Arancini", price: "$15", desc: "Mozzarella-stuffed rice balls, marinara & parmesan", sortOrder: 3 },
  { section: "lunch", category: "Lunch Appetizers", name: "Truffle French Fries", price: "$12", desc: "White truffle oil, truffle cheese", sortOrder: 4 },
  { section: "lunch", category: "Lunch Appetizers", name: "Truffle Mac & Cheese Bites", price: "$16", desc: "Truffle pecorino, cheddar, gruyère, mozzarella", sortOrder: 5 },
  { section: "lunch", category: "Lunch Appetizers", name: "Gambas al Ajillo", price: "$16", desc: "Shrimp, garlic–lemon cream, herbs, toast", sortOrder: 6 },
  { section: "lunch", category: "Lunch Appetizers", name: "Prosciutto-Wrapped Mozzarella Sticks", price: "$12", desc: "House-made marinara", sortOrder: 7 },
  { section: "lunch", category: "Lunch Appetizers", name: "Escargot de Bourgogne", price: "$15", desc: "Garlic–parsley butter, red wine, toast", sortOrder: 8 },

  { section: "lunch", category: "Cheese & Charcuterie Platters", name: "Truffle Cheese Platter", price: "$19", desc: "Black truffles sheep’s milk cheese, seasonal fruits & nuts, crostini", sortOrder: 1 },
  { section: "lunch", category: "Cheese & Charcuterie Platters", name: "Cheesemonger’s Delight (Small)", price: "$29", desc: "Global cheese selection, fruits, roasted nuts, crostini", sortOrder: 2 },
  { section: "lunch", category: "Cheese & Charcuterie Platters", name: "Cheesemonger’s Delight (Large)", price: "$35", desc: "Five-cheese selection, fruits, roasted nuts, crostini", sortOrder: 3 },
  { section: "lunch", category: "Cheese & Charcuterie Platters", name: "Plateaux Délice (Large)", price: "$35", desc: "Salumi & cured meats with three cheeses, condiments", sortOrder: 4 },
  { section: "lunch", category: "Cheese & Charcuterie Platters", name: "Antipasto Platter (Small)", price: "$28", desc: "Prosciutto, salami, mortadella, vegetables & olives, assorted cheeses, truffle oil & balsamic", sortOrder: 5 },
  { section: "lunch", category: "Cheese & Charcuterie Platters", name: "Antipasto Platter (Large)", price: "$35", desc: "Prosciutto, salami, mortadella, vegetables & olives, assorted cheeses, truffle oil & balsamic", sortOrder: 6 },
  { section: "lunch", category: "Cheese & Charcuterie Platters", name: "Parma", price: "$19", desc: "Prosciutto di Parma, mustard, cornichons, marinated olives, roasted nuts, crostini", sortOrder: 7 },

  { section: "lunch", category: "Grilled Sandwiches", name: "Chicken Pesto Panini", price: "$14", desc: "Pesto-mayo, grilled chicken, mixed greens, melted cheese", sortOrder: 1 },
  { section: "lunch", category: "Grilled Sandwiches", name: "Tuna Melt", price: "$14", desc: "White tuna, onions, tomatoes, mayo, melted cheese", sortOrder: 2 },
  { section: "lunch", category: "Grilled Sandwiches", name: "Italian Panino", price: "$14", desc: "Mozzarella, salami, hot capicola, onions, tomatoes, greens, chipotle mayo", sortOrder: 3 },
  { section: "lunch", category: "Grilled Sandwiches", name: "Chicken Parm Grilled Sandwich", price: "$14", desc: "Panko chicken breast, marinara, mozzarella", sortOrder: 4 },
  { section: "lunch", category: "Grilled Sandwiches", name: "Grilled Cheese", price: "$12", desc: "Italian bread, melted cheese", sortOrder: 5 },
  { section: "lunch", category: "Grilled Sandwiches", name: "Eggplant Parm Panino", price: "$14", desc: "Panko eggplant, mozzarella, marinara, panini bread", sortOrder: 6 },

  { section: "lunch", category: "Savory Crêpes", name: "Brie Delight", price: "$12", desc: "Sautéed spinach, artichoke, brie", sortOrder: 1 },
  { section: "lunch", category: "Savory Crêpes", name: "Ham N’ Cheez", price: "$12", desc: "Smoked ham, melted cheese", sortOrder: 2 },

  { section: "lunch", category: "Soups", name: "French Onion Soup", price: "$12", desc: "Caramelized onions, crostini, melted cheese", sortOrder: 1 },
  { section: "lunch", category: "Soups", name: "New England Clam Chowder", price: "$12", desc: "Clams, potatoes, onions, cream, bacon, herbs", sortOrder: 2 },
  { section: "lunch", category: "Soups", name: "Broccoli & Cheddar Chowder", price: "$12", desc: "Chicken broth, cream, herbs", sortOrder: 3 },
  { section: "lunch", category: "Soups", name: "Chicken with Noodles", price: "$10", desc: "White chicken, stock, garden vegetables, herbs", sortOrder: 4 },
  { section: "lunch", category: "Soups", name: "Italian Wedding Soup", price: "$12", sortOrder: 5 },

  { section: "lunch", category: "Salads", name: "Mixed Greens", price: "$13", desc: "Spinach, arugula, power greens, dried cranberries, apple, goat cheese", sortOrder: 1 },
  { section: "lunch", category: "Salads", name: "Caesar", price: "$12", desc: "Romaine, parmesan, croutons, creamy dressing, optional anchovies", sortOrder: 2 },
  { section: "lunch", category: "Salads", name: "Truffle Kale Salad", price: "$13", desc: "Truffle cheese & parmesan, truffle oil, cherry tomatoes, crispy chickpeas, lemon–garlic dressing", sortOrder: 3 },
  { section: "lunch", category: "Salads", name: "Greek Salad", price: "$13", desc: "Mixed greens, onions, tomatoes, black olives, Greek cheese, dressing", sortOrder: 4 },
  { section: "lunch", category: "Salads", name: "Zesty Beet Salad", price: "$13", desc: "Mixed greens, roasted beets, caramelized nuts, goat cheese, balsamic–orange vinaigrette", sortOrder: 5 },

  // =========================
  // TODAY'S SPECIALS
  // (Use specialDate or rotate manually)
  // =========================
  { section: "specials", category: "Starters", name: "Truffle Tator Tots", price: "$14", desc: "White truffle oil, truffle pecorino", sortOrder: 1 },
  { section: "specials", category: "Starters", name: "Shishito Peppers", price: "$12", desc: "Blistered shishitos", sortOrder: 2 },
  { section: "specials", category: "Starters", name: "Sirloin Meatballs", price: "$14", desc: "House-made; baked in tomato sauce; toasted garlic bread", sortOrder: 3 },
  { section: "specials", category: "Starters", name: "Sampler Bites", price: "$15", desc: "Arancini, Prosciutto Mozzarella Wrap, Truffle Fries", sortOrder: 4 },

  { section: "specials", category: "Entrées", name: "Gnocchi alla Sorrentini", price: "$28", desc: "Baked with tomato–basil sauce, mozzarella, pecorino", sortOrder: 1 },
  { section: "specials", category: "Entrées", name: "Sirloin Meatballs", price: "$24", desc: "Italian pasta, marinara, parmesan", sortOrder: 2 },
  { section: "specials", category: "Entrées", name: "Shrimp Scampi", price: "$28", desc: "Sautéed shrimp, garlic butter–lemon sauce, parmesan, angel hair", sortOrder: 3 },
  { section: "specials", category: "Entrées", name: "Beef Stroganoff", price: "$28", desc: "Sautéed sirloin (or chicken), onions, mushrooms, cream, pasta", sortOrder: 4 },

  { section: "specials", category: "Desserts", name: "Chocolate Lava Cake", price: "$14", desc: "Vanilla ice cream, whipped cream", sortOrder: 1 },

  { section: "specials", category: "Soups", name: "Broccoli & Cheddar Chowder", price: "$12", desc: "Chicken broth, cream, herbs", sortOrder: 1 },
  { section: "specials", category: "Soups", name: "Chicken with Pasta Soup", price: "$10", desc: "Chicken, broth, vegetables, herbs, pasta", sortOrder: 2 },

  { section: "specials", category: "Salads", name: "Mixed Greens Salad", price: "$12", desc: "Spinach, arugula, power greens, dried cranberries, apple, goat cheese, balsamic-raspberry vinaigrette", sortOrder: 1 },

// ——— Cocktails & Flights ———
{ section: "drinks", category: "Cocktails", name: "Sangria", desc: "White or Red" },
{ section: "drinks", category: "Cocktails", name: "Strawberry Margarita" },
{ section: "drinks", category: "Cocktails", name: "Barkin’ Stormy" },
{ section: "drinks", category: "Cocktails", name: "Peach Bellini" },
{ section: "drinks", category: "Cocktails", name: "Mimosa", desc: "Orange, Blood Orange, Passion Fruit, Strawberry" },

// ——— Sparkling Wines ———
{ section: "drinks", category: "Sparkling Wines", name: "Aria Cava Brute" },
{ section: "drinks", category: "Sparkling Wines", name: "California Candy", desc: "California" },
{ section: "drinks", category: "Sparkling Wines", name: "Emeri de Bertoli XO Moscato", desc: "Australia" },
{ section: "drinks", category: "Sparkling Wines", name: "Emeri de Bertoli Sparkling Pinot Grigio", desc: "Australia" },
{ section: "drinks", category: "Sparkling Wines", name: "Natale Verga, Prosecco", desc: "Italy" },
{ section: "drinks", category: "Sparkling Wines", name: "Natale Verga, Prosecco Rosé", desc: "Italy" },
{ section: "drinks", category: "Sparkling Wines", name: "Cupcake, Prosecco", desc: "Italy" },
{ section: "drinks", category: "Sparkling Wines", name: "Veuve Dubarry Cuvée Prestige", desc: "France" },
{ section: "drinks", category: "Sparkling Wines", name: "Chateau Napoleon", desc: "Champagne, France" },
{ section: "drinks", category: "Sparkling Wines", name: "Veuve Clicquot", desc: "Champagne, France" },

// ——— White Wines ———
{ section: "drinks", category: "White Wines — Chardonnay", name: "Robert Mondavi, Special Collection", desc: "California, USA" },
{ section: "drinks", category: "White Wines — Chardonnay", name: "Silver Lining", desc: "California" },
{ section: "drinks", category: "White Wines — Chardonnay", name: "Block 827 Reserve", desc: "Santa Lucia Highlands, USA" },
{ section: "drinks", category: "White Wines — Chardonnay", name: "Long Valley Ranch", desc: "Monterey, California" },

{ section: "drinks", category: "White Wines — Pinot Grigio / Pinot Gris", name: "Cupcake", desc: "Italy" },
{ section: "drinks", category: "White Wines — Pinot Grigio / Pinot Gris", name: "Casa Catelli, delle Venezie", desc: "Italy" },
{ section: "drinks", category: "White Wines — Pinot Grigio / Pinot Gris", name: "Natale Verga, delle Venezie", desc: "Italy" },

{ section: "drinks", category: "White Wines — Sauvignon Blanc", name: "Viejo Feo" },
{ section: "drinks", category: "White Wines — Sauvignon Blanc", name: "Stone Bay", desc: "Marlborough, New Zealand" },
{ section: "drinks", category: "White Wines — Sauvignon Blanc", name: "Chloë", desc: "Marlborough, New Zealand" },
{ section: "drinks", category: "White Wines — Sauvignon Blanc", name: "Angels Landing", desc: "Napa Valley, California, USA" },

{ section: "drinks", category: "Other White Wines", name: "Vertice, Île de Beauté Blanc", desc: "Corsica, France" },
{ section: "drinks", category: "Other White Wines", name: "Yalumba, Viognier", desc: "South Australia" },
{ section: "drinks", category: "Other White Wines", name: "Pine Ridge, Chenin Blanc/Viognier", desc: "California" },
{ section: "drinks", category: "Other White Wines", name: "Vieilles Vignes, Sancerre", desc: "Loire Valley, France" },

// ——— Rosé Wines ———
{ section: "drinks", category: "Rosé Wines", name: "Pomelo", desc: "California" },
{ section: "drinks", category: "Rosé Wines", name: "Fortant, Grenache Rosé", desc: "France" },
{ section: "drinks", category: "Rosé Wines", name: "Argiolas, Serra Lori", desc: "Italy" },
{ section: "drinks", category: "Rosé Wines", name: "Stowell, White Zin Rosé", desc: "California" },
{ section: "drinks", category: "Rosé Wines", name: "Château Auguste, Bordeaux Rosé", desc: "France" },
{ section: "drinks", category: "Rosé Wines", name: "Billette, Bouquet de Provence", desc: "France" },

// ——— Red Wines ———
{ section: "drinks", category: "Red Wines — Cabernet Sauvignon", name: "Allegre", desc: "Central Valley, Chile" },
{ section: "drinks", category: "Red Wines — Cabernet Sauvignon", name: "Block 246 Reserve", desc: "Paso Robles, California, USA" },
{ section: "drinks", category: "Red Wines — Cabernet Sauvignon", name: "Viejo Feo", desc: "Chile" },
{ section: "drinks", category: "Red Wines — Cabernet Sauvignon", name: "Long Valley Ranch", desc: "Monterey, California" },

{ section: "drinks", category: "Red Wines — Pinot Noir", name: "Allegre", desc: "Central Valley, Chile" },
{ section: "drinks", category: "Red Wines — Pinot Noir", name: "Mark West", desc: "Willamette Valley, Oregon" },
{ section: "drinks", category: "Red Wines — Pinot Noir", name: "Promesses de France", desc: "Loire Valley, France" },
{ section: "drinks", category: "Red Wines — Pinot Noir", name: "The Prisoner, Red Blend", desc: "California, USA" }, // listed under this header on the image

{ section: "drinks", category: "Red Wines — Malbec", name: "Ocaso", desc: "Mendoza, Argentina" },
{ section: "drinks", category: "Red Wines — Malbec", name: "Butcher’s Cut, Malbec Premium", desc: "Argentina" },

{ section: "drinks", category: "Red Wines — Merlot", name: "Bernard Griffin", desc: "Columbia Valley, USA" },
{ section: "drinks", category: "Red Wines — Merlot", name: "Cakebread", desc: "Napa Valley, California" },

{ section: "drinks", category: "Red Wines — Bordeaux & Bordeaux Style", name: "Château Briot", desc: "Bordeaux, France" },
{ section: "drinks", category: "Red Wines — Bordeaux & Bordeaux Style", name: "Château des Valentons–Canteloup", desc: "Bordeaux, France" },
{ section: "drinks", category: "Red Wines — Bordeaux & Bordeaux Style", name: "Tyrus Evan, Claret", desc: "Napa Valley, California, USA" },
{ section: "drinks", category: "Red Wines — Bordeaux & Bordeaux Style", name: "Newton, Claret", desc: "Napa, California, USA" },
{ section: "drinks", category: "Red Wines — Bordeaux & Bordeaux Style", name: "Oakville, Robert Mondavi", desc: "Napa Valley, California" },

{ section: "drinks", category: "Red Wines — Zinfandel", name: "Zin 91", desc: "Paso Robles, California, USA" },
{ section: "drinks", category: "Red Wines — Zinfandel", name: "7 Deadly Zins", desc: "Lodi, California, USA" },
{ section: "drinks", category: "Red Wines — Zinfandel", name: "Louis M. Martini, Gnarly Vine", desc: "Sonoma County, California" },

{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Ropòrta, Primitivo di Manduria", desc: "Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Natale Verga, Cuvee Rosso Blend", desc: "Veneto, Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Natale Verga, Montepulciano", desc: "Veneto, Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Dogajolo, Sangiovese", desc: "Tuscany, Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Casa Catelli, Chianti", desc: "Tuscany, Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Zenato, Alanera", desc: "Veneto, Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Bernard Griffin, Syrah", desc: "Columbia Valley, USA" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Masso Antico, Primitivo Salento", desc: "Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Octopoda, Cabernet Franc", desc: "Napa, California, USA" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Passito Barbera", desc: "Piemonte, Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Natale Verga, Barolo", desc: "Italy" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "The Prisoner, Red Blend", desc: "California, USA" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Moillard Les Violettes, Côtes-du-Rhône", desc: "Rhône Valley, France" },
{ section: "drinks", category: "Other Reds — USA / Italy / France / Australia", name: "Heredis Langhe, Nebbiolo", desc: "Piedmont, Italy" },

{ section: "drinks", category: "Other Reds — Spain / Argentina / Chile", name: "Rio Madre, Graciano", desc: "Rioja, Spain" },
{ section: "drinks", category: "Other Reds — Spain / Argentina / Chile", name: "Ruben & Flora, Cabernet & Carménère", desc: "Chile" },
{ section: "drinks", category: "Other Reds — Spain / Argentina / Chile", name: "Telmo & Ruth Reserve, Cab Sauv & Merlot", desc: "Chile" },
{ section: "drinks", category: "Other Reds — Spain / Argentina / Chile", name: "Lorenzo & Gaspar Reserve, Carménère", desc: "Chile" },
{ section: "drinks", category: "Other Reds — Spain / Argentina / Chile", name: "Tineta Avante", desc: "Castilla y León, Spain" },

// ——— Beer List ———
{ section: "drinks", category: "Beer & Cider", name: "Allagash White", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Amstel Light, Lager", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Angry Orchard, Hard Cider", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Ballast Point Sculpin, IPA", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Blue Moon, Belgian White", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Bud Light Seltzer", desc: "12 oz — ask for available flavors" },
{ section: "drinks", category: "Beer & Cider", name: "Budweiser", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Bud Light", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Coors Light", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Corona", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Corona Light", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Cloud Candy", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Dale’s Pale Ale", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Dogfish Head 60 Minute IPA", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Duvel", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Exhibit ‘A’ Orchard, IPA", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Exhibit ‘A’ The Cat’s Meow, New England IPA", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Exhibit ‘A’ Goody Two Shoes, Kölsch", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Fiddlehead, IPA", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Founders, All Day IPA", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Guinness", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Harpoon IPA", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Heineken", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Heineken Light", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Jack’s Abby Hoponius Union", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Lagunitas Sumpin’", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Lamplighter Rabbit Rabbit, Double IPA", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Lawson’s Sip of Sunshine, IPA", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Michelob Ultra", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Miller Lite", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Miller High Life", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Victory Sour Monkey, Sour Tripel", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Night Shift The 87, Double IPA", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Night Shift Santilli, American Pale Ale", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Sam Adams Boston Lager", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Sierra Nevada Pale Ale", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "Vanilla Porter, Colorado Ale", desc: "16 oz" },
{ section: "drinks", category: "Beer & Cider", name: "O’Doul’s Premium (Non-Alcoholic)", desc: "12 oz" },
{ section: "drinks", category: "Beer & Cider", name: "White Claw Hard Seltzer", desc: "12 oz — ask for available flavors" },
];

export default menuData;