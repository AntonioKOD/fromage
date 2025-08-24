// components/footer-wine-tip.tsx
"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  title?: string
  rotationInterval?: number // rotation interval in seconds
}

export default function FooterWineTip({ title = "Tonight's Wine Tip", rotationInterval = 5 }: Props) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % RESTAURANT_TIPS.length)
    }, rotationInterval * 10000)

    return () => clearInterval(interval)
  }, [rotationInterval])

  // Get current tip based on index
  const tip = useMemo(() => {
    return RESTAURANT_TIPS[currentTipIndex] || ""
  }, [currentTipIndex])

  // Respect dismissal (per day)
  useEffect(() => {
    const key = "fromage_tip_dismissed_day"
    const today = Math.floor(Date.now() / (1000 * 60 * 60 * 24)).toString()
    const saved = typeof window !== "undefined" ? localStorage.getItem(key) : null
    if (saved === today) setHidden(true)
  }, [])

  

  if (!tip || hidden) return null

  return (
    <div className="text-center" role="note" aria-label="Wine tip">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{title}</p>
        <p className="font-serif text-base leading-relaxed text-foreground max-w-md">{tip}</p>
      </div>
    </div>
  )
}

export const RESTAURANT_TIPS: string[] = [
  // 🍷 Wine Pairings
  "Pinot Noir loves mushroom-based dishes and creamy cheeses.",
  "Sauvignon Blanc is perfect with goat cheese and citrus salads.",
  "Malbec complements rich meats like short ribs or steak bites.",
  "Chardonnay with butter or truffle dishes is a classic pairing.",
  "Rosé works wonderfully with charcuterie boards and prosciutto.",
  "Cabernet Sauvignon and aged cheddar are a bold, hearty combo.",
  "Sparkling wine cuts through salty snacks like olives or chips.",
  "Riesling balances spicy dishes or blue cheese perfectly.",
  "Syrah/Shiraz pairs well with smoky cured meats.",
  "Prosecco and salty Parmesan is an unexpected delight.",

  // 🧀 Cheese & Charcuterie
  "Always serve cheese at room temperature for best flavor.",
  "Soft cheeses like Brie or Camembert shine with fruit preserves.",
  "Blue cheese pairs beautifully with honey or figs.",
  "Aged Gouda works with dark chocolate and red wine.",
  "Cheddar is a natural with apples or pears on a board.",
  "Goat cheese loves fresh herbs and a drizzle of olive oil.",
  "Fresh mozzarella is perfect with tomatoes and balsamic.",
  "Parmesan shards add texture and salt to any platter.",
  "Triple-cream cheeses work best with sparkling wines.",
  "Balance a charcuterie board with salty, sweet, and tangy bites.",

  // 🍴 Small Plates & Appetizers
  "Bruschetta toppings stay freshest if added just before serving.",
  "Roasted nuts add crunch and richness to wine pairings.",
  "Savory crêpes pair well with crisp white wines.",
  "Hummus and rosé are a surprisingly great duo.",
  "Stuffed mushrooms are a crowd-pleaser for vegetarians.",
  "Flatbreads are a great canvas for seasonal flavors.",
  "Olives bring out the fruitiness in young red wines.",
  "Marinated artichokes pair nicely with Sauvignon Blanc.",
  "Light seafood dishes love bright whites and sparkling wines.",
  "Smoked salmon pairs with Champagne or crisp rosé.",

  // 🥖 Bread & Accompaniments
  "Warm baguette slices elevate any cheese plate.",
  "Whole grain bread pairs better with robust reds.",
  "Crostini stay crisp if you brush lightly with olive oil.",
  "Breadsticks with prosciutto are a fun finger food.",
  "Pita with dips pairs well with lighter wines.",
  "Flatbreads can balance sweet and savory toppings at once.",
  "Sourdough pairs beautifully with nutty cheeses.",
  "Crackers let the cheese shine—keep them lightly salted.",
  "Charcoal crackers add dramatic flair to cheese boards.",
  "Fresh focaccia pairs perfectly with olive oil and wine.",

  // ☕ Warm Drinks & Cozy Vibe
  "Mulled wine makes a perfect winter special.",
  "Hot toddies create a cozy, welcoming atmosphere.",
  "Offer herbal teas for guests who want non-alcohol options.",
  "Coffee pairs surprisingly well with dark chocolate desserts.",
  "Espresso martinis bridge coffee and cocktail worlds.",
  "Cocoa powder garnish elevates hot drinks visually.",
  "Steamed milk drinks add warmth to your menu variety.",
  "Hot cider pairs well with sharp cheddar cheese.",
  "Keep non-alcoholic warm options creative and seasonal.",
  "Always serve warm drinks in pre-heated cups or mugs.",

  // 🕯 Ambience & Hospitality
  "Soft lighting makes wine glasses sparkle beautifully.",
  "Candles or lanterns create intimate table settings.",
  "Background jazz or acoustic music pairs with wine nights.",
  "Seasonal flowers on tables add freshness.",
  "Handwritten chalkboard menus feel warm and authentic.",
  "Friendly greetings set the tone for the whole evening.",
  "Sharing platters encourage conversation at the table.",
  "Offering tasting notes creates memorable experiences.",
  "Guests linger longer in cozy, welcoming corners.",
  "Storytelling around your wines makes visits special.",

  // 🗝 Fun Facts & Conversation Starters
  "The world’s oldest bottle of wine dates back to 325 AD.",
  "France, Italy, and Spain produce nearly half the world’s wine.",
  "Champagne can only legally come from the Champagne region.",
  "Cheddar cheese originated in the English village of Cheddar.",
  "Rosé is made by limiting red grape skin contact with juice.",
  "Goat cheese has been made for thousands of years.",
  "The shape of a wine glass changes how wine tastes.",
  "A cork can last decades, but screw caps preserve freshness too.",
  "Pairing wine with food enhances both flavors.",
  "Many sommeliers say: drink what you love, rules are guides.",

  // 🍇 Seasonal & Freshness
  "Summer menus shine with lighter wines and fresh salads.",
  "Winter menus benefit from robust reds and hearty plates.",
  "Fresh berries pair beautifully with sparkling wines.",
  "Figs and goat cheese are a fall favorite.",
  "Grilled peaches with mascarpone are a summer delight.",
  "Pumpkin soups pair nicely with dry Rieslings.",
  "Citrus in winter brightens wine pairings.",
  "Spring herbs enhance goat cheese plates.",
  "Apples and cheddar are a fall classic.",
  "Pears drizzled with honey pair well with Gorgonzola.",

  // 🍮 Dessert Pairings
  "Dark chocolate and Cabernet Sauvignon is bold and rich.",
  "Cheesecake loves late-harvest Rieslings.",
  "Tiramisu pairs nicely with espresso and port.",
  "Fresh fruit tarts go well with sparkling wines.",
  "Chocolate mousse loves Syrah or Shiraz.",
  "Brownies can pair with ruby port or stout beer.",
  "Ice cream floats with stout beers surprise guests.",
  "Lemon bars pair well with Moscato or Prosecco.",
  "Caramel desserts go with oaked Chardonnay.",
  "Apple pie pairs beautifully with Gewürztraminer.",

  // 🌍 Cultural Notes
  "Tapas in Spain are meant to be shared with wine.",
  "French cheese boards often mix cow, sheep, and goat cheeses.",
  "Italian antipasti inspired many modern small plates.",
  "Portugal is famous for Port wines and salty codfish dishes.",
  "South Africa produces world-class Chenin Blanc.",
  "California pioneered bold, fruit-forward Cabernet styles.",
  "Greek wines pair beautifully with Mediterranean fare.",
  "Argentina is renowned for Malbec with steak.",
  "Japan’s plum wines pair well with salty bar snacks.",
  "Australia excels in Shiraz and crisp Rieslings.",
]
