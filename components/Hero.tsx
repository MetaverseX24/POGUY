'use client'

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100 relative overflow-visible">
      {/* 土味乱放的LETSBONK图片 */}
      <Image src="/letbonk.png" alt="LETSBONK" width={90} height={90} style={{position:'absolute',top:30,left:10,transform:'rotate(-15deg)',border:'4px dashed #ff6600',boxShadow:'6px 6px 0 #ff0',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={60} height={60} style={{position:'absolute',top:120,right:40,transform:'rotate(22deg)',border:'4px solid #00f',boxShadow:'-6px 6px 0 #0ff',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={70} height={70} style={{position:'absolute',bottom:40,left:120,transform:'rotate(-33deg)',border:'4px dotted #0c0',boxShadow:'6px -6px 0 #f0f',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={50} height={50} style={{position:'absolute',bottom:10,right:10,transform:'rotate(8deg)',border:'4px double #f00',boxShadow:'-6px -6px 0 #0f0',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                创新科技
                <span className="text-primary-600 block">解决方案</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                我们致力于为企业提供最前沿的技术解决方案，助力数字化转型，创造更美好的未来。
              </p>
            </div>
            
            {/* CA地址显示 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">合约地址</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <code className="text-sm text-gray-700 break-all">
                  CA: EPevghXCxdCn6pDNatCCaAG6tBAVjGhAmNHe2T3Fbonk
                </code>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                立即体验
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                了解更多
              </button>
            </div>

            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: 'linear-gradient(90deg, #fff0f0 0%, #ffe0e0 100%)',
              border: '4px double #ff2222',
              color: '#c00',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              textShadow: '2px 2px 0 #fff, 3px 3px 0 #ff0',
              borderRadius: '12px',
              boxShadow: '0 4px 12px #fbb, 0 0 0 6px #fff inset',
              textAlign: 'center',
              letterSpacing: '2px',
              lineHeight: '1.8',
              maxWidth: '420px',
            }}>
              我就是一个poorguy，以前是个ai叫做pogai，现在是poorguy，没有AI。
            </div>
          </div>

          {/* 右侧图片展示 */}
          <div className="relative">
            {/* 主要图片 - BONK和S图片 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative h-48 bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/BONK.png"
                  alt="BONK"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/ｓ.png"
                  alt="S"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 其他图片随机排列 */}
            <div className="grid grid-cols-3 gap-3">
              <div className="relative h-24 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images.PNG"
                  alt="Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/L1cSjt_0_400x400.jpg"
                  alt="Image 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/GvGXfHUasAABqcq.png"
                  alt="Image 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/GvGgo2nXQAAntfa.png"
                  alt="Image 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/GvGXfHUasAABqcq.png"
                  alt="Image 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images.PNG"
                  alt="Image 6"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 