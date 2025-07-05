'use client'

import React from 'react'
import { Code, Database, Cloud, Smartphone } from 'lucide-react'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: '软件开发',
      description: '提供定制化的软件开发服务，包括Web应用、移动应用和企业级解决方案。',
      features: ['前端开发', '后端开发', 'API集成', '系统架构']
    },
    {
      icon: Database,
      title: '数据管理',
      description: '专业的数据管理和分析服务，帮助您更好地理解和利用数据价值。',
      features: ['数据存储', '数据分析', '数据安全', '数据可视化']
    },
    {
      icon: Cloud,
      title: '云服务',
      description: '提供全面的云计算解决方案，确保您的业务高效运行。',
      features: ['云部署', '云存储', '负载均衡', '自动扩展']
    },
    {
      icon: Smartphone,
      title: '移动应用',
      description: '开发高质量的移动应用程序，为用户提供卓越的移动体验。',
      features: ['iOS开发', 'Android开发', '跨平台开发', '应用优化']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-yellow-100 via-green-100 to-pink-100 relative overflow-visible">
      {/* 土味乱放的LETSBONK图片 */}
      <Image src="/letbonk.png" alt="LETSBONK" width={40} height={40} style={{position:'absolute',top:15,left:30,transform:'rotate(8deg)',border:'2px solid #0ff',boxShadow:'2px 2px 0 #f00',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={30} height={30} style={{position:'absolute',top:120,right:50,transform:'rotate(-14deg)',border:'2px dashed #f0f',boxShadow:'-2px 2px 0 #0c0',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={35} height={35} style={{position:'absolute',bottom:25,left:120,transform:'rotate(19deg)',border:'2px double #ff0',boxShadow:'2px -2px 0 #00f',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我们的服务
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            提供全方位的技术服务，满足您的各种需求
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 