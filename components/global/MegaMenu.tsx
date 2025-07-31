'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Settings, 
  Network, 
  Shield, 
  Code, 
  Compass,
  Scale,
  Users,
  User2,
  Rocket,
  Heart,
  DollarSign,
  Phone,
  ShoppingCart,
  GraduationCap,
  Headphones,
  Target,
  BarChart3,
  Cog
} from 'lucide-react'

interface MegaMenuProps {
  type: string
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ type }) => {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'abstract-idea-spark': Lightbulb,
      'abstract-gears': Settings,
      'abstract-nodes': Network,
      'bldr-logo-icon': Settings,
      'abstract-shield': Shield,
      'abstract-code': Code,
      'abstract-compass': Compass,
      'abstract-scales': Scale,
      'icon-team': Users,
      'icon-handshake': User2,
      'icon-rocket': Rocket,
      'icon-healthcare': Heart,
      'icon-finance': DollarSign,
      'icon-telecom': Phone,
      'icon-ecommerce': ShoppingCart,
      'icon-education': GraduationCap,
      'icon-support': Headphones,
      'icon-marketing': Target,
      'icon-sales': BarChart3,
      'icon-operations': Cog,
    }
    
    const IconComponent = iconMap[iconName] || Settings
    return <IconComponent className="h-6 w-6" />
  }

  const capabilitiesMenu = {
    columns: [
      {
        title: "Core Services",
        content: [
          { text: "AI Transformation", caption: "Strategic consulting to reshape your business.", href: "/ai-transformation", icon: "abstract-idea-spark" },
          { text: "Custom AI Development", caption: "Bespoke solutions for unique challenges.", href: "/custom-ai", icon: "abstract-gears" },
          { text: "Sovereign AI", caption: "Full data control, on-premise or private cloud.", href: "/sovereign-ai", icon: "abstract-shield" },
          { text: "Responsible AI", caption: "Ethical, transparent, and compliant.", href: "/responsible-ai", icon: "abstract-scales" }

        ]
      },
      {
        title: "Featured Content",
        featuredCard: {
          imageSrc: "/images/megamenu/case-study-thumbnail.png",
          headline: "Case Study: Marketing Leader Boosts CSAT by 40%",
          description: "Discover how our AI agents transformed their support.",
          cta: { text: "Read Now", href: "/resources/marketing-case-study/" }
        }
      }
      
    ]
  }

  const solutionsMenu = {
    columns: [
      {
        title: "By Industry",
        content: [
          { text: "Healthcare", href: "/solutions-by-industry#healthcare", icon: "icon-healthcare" },
          { text: "Financial Sector", href: "/solutions-by-industry#financial-sector", icon: "icon-finance" },
          { text: "Telecom", href: "/solutions-by-industry#telecom", icon: "icon-telecom" },
          { text: "Ecommerce", href: "/solutions-by-industry#ecommerce", icon: "icon-ecommerce" },
          { text: "Education", href: "/solutions-by-industry#education", icon: "icon-education" },
          { text: "Marketing & Agencies", href: "/solutions-by-industry#marketing", icon: "icon-marketing" }

        ]
      },
      {
        title: "By Use Case",
        content: [
          { text: "Customer Service", href: "/solutions-by-industry#telecom", icon: "icon-support" },
          { text: "Sales Automation", href: "/solutions-by-industry#ecommerce", icon: "icon-sales" },
          { text: "Lead Generation", href: "/solutions-by-industry#marketing", icon: "icon-money" },
          { text: "Operations", href: "/solutions-by-industry#healthcare", icon: "icon-operations" }
        ]
      },
      {
        title: "Platforms & Products",
        content: [
          { text: "BLDR Platform", href: "/bldr-platform", icon: "bldr-logo-icon" },
          // { text: "BLDR Platform", caption: "No-code AI agent creation & automation.", href: "/bldr-platform", icon: "bldr-logo-icon" },
          { text: "Developer Access", href: "/developer-access", icon: "abstract-code" }
          // { text: "Developer Access", caption: "APIs and SDKs for unlimited customization.", href: "/developer-access", icon: "abstract-code" }
        ]
      },
      
    ]
  }

  const whyInovaMenu = {
    columns: [
      {
        title: "Our Difference",
        content: [
          { text: "Our Approach", caption: "How we architect AI differently.", href: "/our-approach", icon: "abstract-compass" },
          // { text: "Data Sovereignty", caption: "Your data, your rules. Always.", href: "/why-inova#data-sovereignty", icon: "abstract-shield" },
          { text: "AI Orchestration", caption: "Seamlessly integrate and manage AI models.", href: "/ai-orchestration", icon: "abstract-nodes" },
        ]
      },
      {
        title: "About Us",
        content: [
          { text: "Our Leadership", caption: "Meet the minds behind the mission.", href: "/our-team", icon: "icon-team" },
          { text: "Partners", caption: "Join our growing ecosystem.", href: "/partner-with-inova", icon: "icon-handshake" },
          { text: "Life at Inova", caption: "Build the future with us.", href: "/careers-with-inova", icon: "icon-rocket" }
        ]
      }
    ]
  }

  const getMenuData = () => {
    switch (type) {
      case 'capabilities':
        return capabilitiesMenu
      case 'solutions':
        return solutionsMenu
      case 'why-inova':
        return whyInovaMenu
      default:
        return capabilitiesMenu
    }
  }

  const menuData = getMenuData()

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-surfaceCard border-b border-borderSubtle shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid gap-8 ${type === 'solutions' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {menuData.columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-jakarta font-semibold text-lg text-textPrimary mb-4">
                {column.title}
              </h3>
              
              {(column as any).featuredCard ? (
                    <div className="surface-card p-4">
                      <div className="aspect-video bg-backgroundDark rounded-lg mb-4 flex items-center justify-center overflow-visible">
                        <Image
                          src={(column as any).featuredCard.imageSrc}
                          alt={ (column as any).featuredCard.headline || "Featured Content" }
                          width={480}
                          height={270}
                          className="object-cover w-full h-full rounded-lg"
                          priority
                        />
                      </div>
                      <h4 className="font-jakarta font-semibold text-textPrimary mb-2">
                        {(column as any).featuredCard.headline}
                      </h4>
                      <p className="text-textSecondary text-sm mb-4">
                        {(column as any).featuredCard.description}
                      </p>
                      <Link
                        href={(column as any).featuredCard.cta.href}
                        className="inline-flex items-center text-accentPurple hover:text-white transition-colors duration-200"
                      >
                        {(column as any).featuredCard.cta.text}
                        <span className="ml-1">→</span>
                      </Link>
                    </div>
              ) : (
                <div className="space-y-4">
                  {column.content?.map((item: any, itemIndex: number) => (
                    <motion.div
                      key={itemIndex}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-start p-3 rounded-lg hover:bg-backgroundDark transition-colors duration-200 group"
                      >
                        <div className="text-accentPurple group-hover:scale-110 transition-transform duration-200 mr-3 mt-1">
                          {getIconComponent(item.icon)}
                        </div>
                        <div>
                          <div className="font-inter font-medium text-textPrimary group-hover:text-accentPurple transition-colors duration-200">
                            {item.text}
                          </div>
                          {item.caption && (
                            <div className="text-textSecondary text-sm mt-1">
                              {item.caption}
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
