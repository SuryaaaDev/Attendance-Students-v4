"use client";

import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Zap,
  Users,
  Monitor,
  Shield,
  QrCode,
  Fingerprint,
  Cloud,
  Activity,
  Gauge,
  Layers,
  Settings,
  Wifi,
  Battery,
  Bell,
  Search,
  User,
  LogOut,
  Home,
  PieChart,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {

  return (
    <main className="min-h-screen lg:h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50/50 overflow-hidden flex items-center justify-center p-4 relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-10 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl animate-blob" />
        <div className="absolute -top-10 -right-10 h-96 w-96 rounded-full bg-green-200/40 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-10 left-20 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl animate-blob animation-delay-4000" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(34,197,94,0.18) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-2xl border border-white/50 shadow-2xl shadow-emerald-500/10 rounded-3xl p-6 md:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1.5 text-xs font-medium">
                  <Sparkles className="h-3 w-3 mr-2" />
                  Next Generation System
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] flex flex-wrap gap-2.5"
              >
                <span className="text-gray-800">Coming</span>
                <span className="bg-linear-to-r from-emerald-500 via-green-500 to-emerald-500 bg-clip-text text-transparent animate-gradient bg-size-[200%_200%]">
                  Soon...
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-base max-w-md leading-relaxed"
              >
                Modern attendance system for schools.
                <span className="block text-gray-400 text-sm mt-1">
                  Faster. Smarter. More secure.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-6"
              >
                {[
                  { value: "3+", label: "Devices", icon: Zap },
                  { value: "200+", label: "Students", icon: Users },
                  { value: "94%", label: "Attendance", icon: CheckCircle2 },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-50 rounded-lg">
                      <stat.icon className="h-3.5 w-3.5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-gray-800 font-semibold text-sm">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-[10px]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-400 text-xs flex items-center gap-2"
              >
                <Clock className="h-3 w-3" />
                Currently in development. Stay tuned for updates!
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Monitor Stand */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-0">
                  <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-3 h-10 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 mx-auto rounded-t-lg"></div>
                </div>

                {/* Monitor Frame */}
                <div className="relative z-10 bg-linear-to-br from-gray-100 to-white rounded-2xl p-2 shadow-2xl border border-gray-200/50">
                  {/* Screen */}
                  <div className="relative bg-linear-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-inner">
                    <div className="p-4 min-h-85">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200/50">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                            <Search className="h-3 w-3 text-gray-400" />
                            <a href="#" rel="noopener noreferrer" className="text-[10px] text-gray-500 font-mono">
                              absensiv4.vortech.my.id
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wifi className="h-3 w-3 text-emerald-500" />
                          <Battery className="h-3 w-3 text-emerald-500" />
                          <span className="text-[10px] text-gray-500 font-mono">
                            14:30
                          </span>
                        </div>
                      </div>

                      {/* Dashboard */}
                      <div className="space-y-3">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-50 rounded-lg">
                              <Monitor className="h-3.5 w-3.5 text-emerald-500" />
                            </div>
                            <span className="text-sm font-medium text-gray-800">
                              Dashboard
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-emerald-50 text-emerald-600 border-emerald-200 text-[9px] px-2 py-0">
                              <Activity className="h-2.5 w-2.5 mr-1" />
                              Live
                            </Badge>
                            <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                              <Bell className="h-3 w-3 text-gray-500" />
                            </div>
                            <div className="w-6 h-6 rounded-full bg-linear-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                              <User className="h-3 w-3 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { value: "3+", label: "Devices", icon: Zap },
                            { value: "200+", label: "Students", icon: Users },
                            { value: "94%", label: "Rate", icon: Gauge },
                            { value: "0.8s", label: "Speed", icon: Zap },
                          ].map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5 + i * 0.08,
                              }}
                              className="bg-gray-50 rounded-lg p-2.5 border border-gray-200/50 hover:shadow-md transition-shadow"
                            >
                              <stat.icon className="h-3.5 w-3.5 text-emerald-500 mb-1" />
                              <div className="text-gray-800 font-semibold text-sm">
                                {stat.value}
                              </div>
                              <div className="text-gray-400 text-[9px]">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Progress */}
                        <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-200/50">
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-gray-500">Progress</span>
                            <span className="text-emerald-600 font-medium">
                              85%
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 1.5, delay: 0.8 }}
                              className="h-full bg-linear-to-r from-emerald-400 to-green-500 rounded-full"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-1.5">
                          {[
                            { icon: QrCode, label: "QR" },
                            { icon: Fingerprint, label: "RFID" },
                            { icon: Cloud, label: "Cloud" },
                            { icon: Shield, label: "Safe" },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="bg-gray-50 rounded-lg p-2 text-center border border-gray-200/50 hover:bg-emerald-50 transition-colors"
                            >
                              <item.icon className="h-3.5 w-3.5 text-emerald-500 mx-auto" />
                              <div className="text-gray-500 text-[8px] mt-0.5">
                                {item.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[9px] text-gray-500 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-200/50">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                              <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce" />
                              <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce delay-100" />
                              <div className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce delay-200" />
                            </div>
                            <span>Active development</span>
                          </div>
                          <span className="font-mono text-gray-400">
                            v4.1
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-200/50">
                          <div className="flex items-center gap-3">
                            {[Home, PieChart, FileText].map((Icon, i) => (
                              <Icon
                                key={i}
                                className="h-3 w-3 text-gray-400 hover:text-emerald-500 transition-colors cursor-default"
                              />
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <Settings className="h-3 w-3 text-gray-400 hover:text-emerald-500 transition-colors cursor-default" />
                            <LogOut className="h-3 w-3 text-gray-400 hover:text-red-500 transition-colors cursor-default" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bezel */}
                    <div className="h-4 bg-gray-100 flex items-center justify-center border-t border-gray-200">
                      <span className="text-[6px] text-gray-400 tracking-[0.3em] font-mono">
                        ABSENSI V4
                      </span>
                    </div>
                  </div>

                  {/* Power LED */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <div className="w-1 h-1 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Fresh Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 pt-6 border-t border-gray-200/50 flex flex-col sm:flex-row justify-between items-center gap-3"
          >
            <p className="text-gray-400 text-xs flex items-center gap-2">
              <Layers className="h-3 w-3" />Absensi V4
            </p>
            <p className="flex gap-1 text-gray-400 text-xs">
              Created by 
              <a href="https://vortech.my.id" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors font-medium">
                VortechDev
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
