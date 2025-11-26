"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, BarChart3, Briefcase, Github, Globe, HelpCircle, Lightbulb, Linkedin, Mail, Network, Share2, Sparkles, Star, Target, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechShop Milano"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Invest in Milan's Tech Future"
          description="We back exceptional founders and transformative technologies shaping European innovation. Join a community of visionary investors and ambitious entrepreneurs."
          tag="Venture Capital"
          tagIcon={Zap}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145352935-t4375ddp.jpg",
              imageAlt: "Venture capital office"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145353500-4vfvxux9.jpg",
              imageAlt: "Tech startup workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145354243-pztzljzx.jpg",
              imageAlt: "Investment discussion"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145354936-nefwf4ox.jpg",
              imageAlt: "Financial technology"
            }
          ]}
          buttons={[
            {
              text: "View Portfolio",
              href: "portfolio"
            },
            {
              text: "Schedule Demo",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Driving Innovation"
          description={[
            "TechShop Milano is a leading venture capital firm based in Milan, Italy, focusing on early-stage technology companies with disruptive potential across Europe.",
            "We provide strategic capital, hands-on mentorship, and access to our extensive network of industry experts and successful entrepreneurs.",
            "Our mission is to identify and nurture the next generation of tech leaders who will transform their industries and create lasting value."
          ]}
          showBorder={true}
          buttons={[
            {
              text: "Learn More",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Our Investment Approach"
          description="Strategic support at every stage of growth"
          tag="Services"
          tagIcon={Sparkles}
          features={[
            {
              id: "1",
              title: "Early-Stage Funding",
              description: "We provide seed and Series A funding to promising technology startups with strong founding teams and innovative solutions.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145356010-ry0b2lr4.jpg"
              },
              items: [
                {
                  icon: Zap,
                  text: "Quick decision making"
                },
                {
                  icon: Target,
                  text: "Flexible terms"
                },
                {
                  icon: TrendingUp,
                  text: "Growth partnerships"
                }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Strategic Mentorship",
              description: "Our experienced team works directly with portfolio companies on scaling, product-market fit, and go-to-market strategies.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145356666-dp734kn5.jpg"
              },
              items: [
                {
                  icon: Users,
                  text: "Expert guidance"
                },
                {
                  icon: Briefcase,
                  text: "Business strategy"
                },
                {
                  icon: Lightbulb,
                  text: "Market insights"
                }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Network Access",
              description: "Connect portfolio companies with industry leaders, potential customers, and future investors through our curated ecosystem.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145357332-hd3g91qm.jpg"
              },
              items: [
                {
                  icon: Globe,
                  text: "Global connections"
                },
                {
                  icon: Share2,
                  text: "Strategic partnerships"
                },
                {
                  icon: Network,
                  text: "Ecosystem events"
                }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Impact"
          description="Proven track record of building successful companies"
          tag="Performance"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Portfolio Value",
              value: "€850M+"
            },
            {
              id: "2",
              icon: Briefcase,
              title: "Active Investments",
              value: "45+"
            },
            {
              id: "3",
              icon: Users,
              title: "Founders Supported",
              value: "120+"
            },
            {
              id: "4",
              icon: Award,
              title: "Unicorns Created",
              value: "8"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Team"
          description="Experienced investors and operators with deep tech expertise"
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Managing Partner",
              description: "Former VP Engineering at leading Italian tech unicorn. 15+ years in venture capital and startup scaling.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145357790-00oaqpk4.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "2",
              name: "Elena Verdi",
              role: "Investment Partner",
              description: "Tech entrepreneur with 2 successful exits. Specialized in SaaS and fintech investments across Europe.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145358579-pzprxltc.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Globe,
                  url: "https://www.example.com"
                }
              ]
            },
            {
              id: "3",
              name: "Luigi Bianchi",
              role: "Operating Partner",
              description: "CFO experience at multiple unicorns. Expert in financial planning and M&A strategy for growth companies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145360673-mxq57j70.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Mail,
                  url: "mailto:luigi@techshopmilano.com"
                }
              ]
            },
            {
              id: "4",
              name: "Sofia Neri",
              role: "Associate",
              description: "Venture analyst with focus on deep tech and sustainability. MIT graduate and tech ecosystem builder.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145361411-15d1j8b3.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Github,
                  url: "https://github.com"
                }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Portfolio Company Success Stories"
          description="Hear from founders we've supported on their journey to scaling"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Andrea Moretti",
              role: "CEO & Founder",
              testimonial: "TechShop Milano didn't just provide capital, they provided the strategic guidance and network connections we needed to scale from pre-seed to Series A. Marco's experience was invaluable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145362370-81hun1os.jpg"
            },
            {
              id: "2",
              name: "Giulia Rizzo",
              role: "Founder",
              testimonial: "The mentorship from the team transformed our product-market fit. Within 6 months of their investment, we tripled our MRR and expanded to 3 new markets.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145362894-7wnelrx4.jpg"
            },
            {
              id: "3",
              name: "Davide Ferrari",
              role: "CEO",
              testimonial: "What sets TechShop Milano apart is their hands-on approach. They're not just investors, they're operational partners genuinely invested in our success.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145363437-b2ccg9kl.jpg"
            },
            {
              id: "4",
              name: "Francesca Gallo",
              role: "Co-Founder",
              testimonial: "The network access alone paid for their investment multiple times over. We've partnered with major enterprises and attracted world-class talent through their connections.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145364056-ofeo5waz.jpg"
            },
            {
              id: "5",
              name: "Roberto Conti",
              role: "Founder & CEO",
              testimonial: "Fast decision-making, fair terms, and genuine support. That's TechShop Milano. They understood our vision immediately and backed us when we needed it most.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145364686-7bwuyh8l.jpg"
            },
            {
              id: "6",
              name: "Alessandra Lombardi",
              role: "Co-Founder",
              testimonial: "Beyond the capital, the strategic insights on fundraising and scaling were game-changing. Elena helped us navigate Series B negotiations perfectly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145365247-0z0el0g2.jpg"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions from founders and investors interested in TechShop Milano"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What stage of companies do you invest in?",
              content: "We primarily focus on seed and Series A stage technology companies. We look for strong founding teams with innovative solutions addressing large market opportunities. Our typical check size ranges from €500K to €3M."
            },
            {
              id: "2",
              title: "What sectors do you focus on?",
              content: "We invest across deep tech, SaaS, fintech, climate tech, and healthtech. Our team has particular expertise in B2B software, infrastructure, and frontier technologies. We're geographically focused on Europe with a strong emphasis on Italian and broader Southern European founders."
            },
            {
              id: "3",
              title: "How long is the typical decision process?",
              content: "We pride ourselves on fast decision-making. From initial meeting to investment decision, our process typically takes 4-8 weeks. We make decisions based on our investment thesis rather than lengthy administrative processes."
            },
            {
              id: "4",
              title: "Do you take board seats?",
              content: "We typically take board observation rights at Seed stage and board seats at Series A. We believe in active partnership with founders and provide operational support beyond capital."
            },
            {
              id: "5",
              title: "How can I apply for funding?",
              content: "Send us a brief pitch deck, executive summary, and financial projections to partnerships@techshopmilano.com. We also actively source through our network and attend major tech events. Feel free to reach out for an intro from a mutual connection."
            },
            {
              id: "6",
              title: "What makes TechShop Milano different?",
              content: "Our combination of tech industry expertise, operational experience, and strong European network sets us apart. We're hands-on partners, not passive investors. Our team includes successful founders and operators who truly understand the challenges of building technology companies."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Ready to discuss your startup or investment opportunity? Reach out to our team. We typically respond within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "your@email.com",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your startup, investment thesis, or partnership idea...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Portfolio",
                  href: "portfolio"
                }
              ]
            },
            {
              title: "Opportunities",
              items: [
                {
                  label: "For Founders",
                  href: "#"
                },
                {
                  label: "For Investors",
                  href: "#"
                },
                {
                  label: "Press & News",
                  href: "#"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "hello@techshopmilano.com",
                  href: "mailto:hello@techshopmilano.com"
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com"
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 TechShop Milano. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}