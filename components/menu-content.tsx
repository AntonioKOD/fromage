"use client"

import { useState } from "react"
import { Tabs } from "@/components/ui/vercel-tabs"
import menuData, { type MenuItem } from "@/data/menu-data"

const tabs = [
  { id: "dinner", label: "Dinner Menu" },
  { id: "lunch", label: "Lunch Menu" },
  { id: "specials", label: "Today's Specials" },
  { id: "drinks", label: "Drinks" },
]

function groupByCategory(items: MenuItem[]) {
  const grouped: Record<string, MenuItem[]> = {}
  items.forEach((item) => {
    const category = item.category || "Other"
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(item)
  })

  // Sort items within each category by sortOrder
  Object.keys(grouped).forEach((category) => {
    grouped[category].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
  })

  return grouped
}

export default function FromageMenu() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const currentMenuItems = menuData.filter((item) => item.section === activeTab)
  const groupedMenu = groupByCategory(currentMenuItems)
  const categories = Object.keys(groupedMenu)

  const searchResults = searchQuery.trim()
    ? menuData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : []

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <button
            onClick={() => setShowSearch(true)}
            className="absolute top-0 right-0 p-2 text-stone-600 hover:text-stone-800 transition-colors"
            aria-label="Search menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <h1 className="text-4xl font-serif text-stone-800 mb-4 tracking-wide">Fromage</h1>
          <p className="text-stone-600 text-sm tracking-widest uppercase">French Restaurant & Wine Bar</p>
        </div>

        {showSearch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-none outline-none text-stone-800 placeholder-stone-500"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setShowSearch(false)
                    setSearchQuery("")
                  }}
                  className="text-stone-600 hover:text-stone-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="border-t border-stone-200 pt-4 max-h-64 overflow-y-auto">
                {searchQuery.trim() ? (
                  searchResults.length > 0 ? (
                    <div className="space-y-3">
                      {searchResults.slice(0, 10).map((item, index) => (
                        <div key={index} className="flex justify-between items-start gap-4">
                          <div>
                            <h4 className="font-serif text-stone-800">{item.name}</h4>
                            <p className="text-xs text-stone-600 capitalize">
                              {item.section} • {item.category}
                            </p>
                            {item.desc && <p className="text-sm text-stone-600 mt-1">{item.desc}</p>}
                          </div>
                          {item.price && (
                            <span className="text-stone-800 font-medium whitespace-nowrap">{item.price}</span>
                          )}
                        </div>
                      ))}
                      {searchResults.length > 10 && (
                        <p className="text-center text-stone-600 text-sm pt-2">
                          Showing first 10 of {searchResults.length} results
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-center text-stone-600">No items found</p>
                  )
                ) : (
                  <p className="text-center text-stone-600">Start typing to search menu items</p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center -mt-5 font-medium font-serif">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left p-4 mt-4">
            {categories.map((category) => (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <h3 className="text-lg font-serif text-stone-800 border-b border-stone-300 pb-2 mb-4 tracking-wide">
                  {category}
                </h3>

                {/* Category Items */}
                <div className="space-y-4">
                  {groupedMenu[category].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-base font-serif text-stone-800 leading-tight">{item.name}</h4>
                        {item.price && (
                          <span className="text-stone-800 font-medium text-sm whitespace-nowrap">{item.price}</span>
                        )}
                      </div>
                      {item.desc && <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-stone-600 text-sm italic">Bon Appétit</p>
        </div>
      </div>
    </div>
  )
}
