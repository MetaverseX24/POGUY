'use client'

import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-r from-green-100 via-yellow-100 to-pink-100 relative overflow-visible">
      {/* 土味乱放的LETSBONK图片 */}
      <Image src="/letbonk.png" alt="LETSBONK" width={60} height={60} style={{position:'absolute',top:20,left:40,transform:'rotate(12deg)',border:'3px solid #f0f',boxShadow:'4px 4px 0 #0ff',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={40} height={40} style={{position:'absolute',top:180,right:60,transform:'rotate(-18deg)',border:'3px dashed #0c0',boxShadow:'-4px 4px 0 #ff0',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={50} height={50} style={{position:'absolute',bottom:30,left:100,transform:'rotate(25deg)',border:'3px double #00f',boxShadow:'4px -4px 0 #f00',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧图片 */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/BONK.png"
                  alt="BONK"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/ｓ.png"
                  alt="S"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images.PNG"
                  alt="Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/GvGXfHUasAABqcq.png"
                  alt="Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                关于我们
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                我们是一家专注于技术创新的企业，致力于为客户提供最优质的服务和解决方案。
                通过持续的技术研发和产品优化，我们已经成为行业内值得信赖的合作伙伴。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                我们的团队由经验丰富的专业人士组成，拥有深厚的技术背景和丰富的行业经验。
                我们相信，通过技术创新可以为客户创造更大的价值。
              </p>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">服务客户</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">技术专家</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
                <div className="text-gray-600">客户满意度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 