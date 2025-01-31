"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Clock, RefreshCcw } from 'lucide-react'

export default function CancellationPage() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cancellation & Refund Policy</h1>
        <p className="text-sm text-gray-500">Last updated on 01-02-2025 00:24:54</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Our Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600">
            HEMANSHU YOGESH PATIL believes in helping its customers as far as possible, and has therefore a liberal cancellation policy.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Cancellation Timeline</h3>
              </div>
              <p className="text-sm text-gray-600">
                Cancellations will be considered only if the request is made immediately after placing the order.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <RefreshCcw className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Refund Process</h3>
              </div>
              <p className="text-sm text-gray-600">
                In case of any Refunds approved, it&apos;ll take 1-2 Days for the refund to be processed.
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="space-y-4">
                <h3 className="font-medium">Important Notes:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li>HEMANSHU YOGESH PATIL does not accept cancellation requests for perishable items.</li>
                  <li>Report damaged or defective items to Customer Service within 2 Days of receipt.</li>
                  <li>For warranty-related complaints, please refer to the manufacturer.</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
