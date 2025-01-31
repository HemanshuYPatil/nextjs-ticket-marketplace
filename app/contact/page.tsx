"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto p-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-sm text-gray-500">Last updated on 01-02-2025 00:24:13</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-blue-50 p-2.5">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium mb-1">Address</p>
                <p className="text-sm text-gray-600">Plot No-5, Sr No-221/1,</p>
                <p className="text-sm text-gray-600">Bhusawal, Maharashtra, PIN: 425201</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-blue-50 p-2.5">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-sm text-gray-600">7058026892</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-blue-50 p-2.5">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm text-gray-600">hemanshuypatil@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <p className="font-medium mb-2">Legal Entity Information</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Merchant Legal entity name:</span> Tickter
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

