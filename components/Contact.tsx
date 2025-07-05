'use client'

import React from 'react'
import { Mail, Phone, MapPin, Copy } from 'lucide-react'
import Image from 'next/image'

const Contact = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // 这里可以添加复制成功的提示
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-tl from-pink-100 via-green-100 to-yellow-100 relative overflow-visible">
      {/* 土味乱放的LETSBONK图片 */}
      <Image src="/letbonk.png" alt="LETSBONK" width={35} height={35} style={{position:'absolute',top:10,left:10,transform:'rotate(-7deg)',border:'2px solid #f00',boxShadow:'2px 2px 0 #0ff',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={25} height={25} style={{position:'absolute',top:90,right:30,transform:'rotate(13deg)',border:'2px dashed #0c0',boxShadow:'-2px 2px 0 #ff0',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <Image src="/letbonk.png" alt="LETSBONK" width={30} height={30} style={{position:'absolute',bottom:20,left:60,transform:'rotate(-19deg)',border:'2px double #00f',boxShadow:'2px -2px 0 #f0f',zIndex:10,background:'#fff',borderRadius:'50%'}} />
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们随时准备为您提供专业的服务和支持
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 左侧联系信息 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                联系信息
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">邮箱</div>
                    <div className="text-gray-600">contact@techcorp.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-pink-200 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-bold text-pink-600 text-lg drop-shadow-lg">土味热线</div>
                    <div className="text-pink-700 text-xl font-extrabold tracking-widest animate-bounce">114-5141919</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">地址</div>
                    <div className="text-gray-600">北京市朝阳区科技园区</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CA地址 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">合约地址</h4>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center justify-between">
                  <code className="text-sm text-gray-700 break-all flex-1">
                    CA: EPevghXCxdCn6pDNatCCaAG6tBAVjGhAmNHe2T3Fbonk
                  </code>
                  <button
                    onClick={() => copyToClipboard('EPevghXCxdCn6pDNatCCaAG6tBAVjGhAmNHe2T3Fbonk')}
                    className="ml-2 p-2 text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧联系表单 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              发送消息
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="请输入您的邮箱"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="请输入消息主题"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  消息内容
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="请输入您的消息内容"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 