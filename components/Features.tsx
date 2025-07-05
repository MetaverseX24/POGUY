'use client'

import React from 'react'
import { Shield, Zap, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: '安全可靠',
      description: '采用最先进的安全技术，确保您的数据和资产安全无忧。',
    },
    {
      icon: Zap,
      title: '高效快速',
      description: '优化的系统架构，提供极速响应和流畅的用户体验。',
    },
    {
      icon: Users,
      title: '用户友好',
      description: '简洁直观的界面设计，让每个用户都能轻松上手。',
    },
    {
      icon: TrendingUp,
      title: '持续增长',
      description: '不断创新和发展，为您提供更多价值和服务。',
    },
  ]

  return (
    <section id="features" className="section-padding bg-gradient-to-l from-pink-100 via-yellow-100 to-green-100 relative overflow-visible">
      {/* 土味乱放的LETSBONK图片 */}
      <Image src="/letbonk.png" alt="LETSBONK" width={45} height={45} style={{position:'absolute',top:10,left:20,transform:'rotate(-10deg)',border:'2px solid #ff0',boxShadow:'2px 2px 0 #f0f',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={35} height={35} style={{position:'absolute',top:100,right:30,transform:'rotate(17deg)',border:'2px dashed #00f',boxShadow:'-2px 2px 0 #0ff',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={40} height={40} style={{position:'absolute',bottom:20,left:80,transform:'rotate(-22deg)',border:'2px double #0c0',boxShadow:'2px -2px 0 #ff0',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心特色
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们提供全方位的技术解决方案，满足您的各种需求
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 