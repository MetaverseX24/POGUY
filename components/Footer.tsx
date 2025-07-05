'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 公司信息 */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-pink-600 mb-4 drop-shadow-lg">poorguy</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们是一家专注于技术创新的企业，致力于为客户提供最优质的服务和解决方案。
                通过持续的技术研发和产品优化，我们已经成为行业内值得信赖的合作伙伴。
              </p>
              
              {/* CA地址 */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">合约地址</h4>
                <code className="text-xs text-gray-400 break-all">
                  CA: EPevghXCxdCn6pDNatCCaAG6tBAVjGhAmNHe2T3Fbonk
                </code>
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                    首页
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                    特色功能
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    服务
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    联系我们
                  </a>
                </li>
              </ul>
            </div>

            {/* 联系信息 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">联系信息</h4>
              <ul className="space-y-2 text-gray-300">
                <li>邮箱: contact@techcorp.com</li>
                <li>电话: 土味热线 114-5141919</li>
                <li>地址: 北京市朝阳区科技园区</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pink-600 text-lg font-bold drop-shadow-lg">
              © 2024 poorguy. 保留所有权利。
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                服务条款
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 