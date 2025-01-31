"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-sm text-gray-500">Last updated on 01-02-2025 00:24:31</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Terms of Use</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-blue max-w-none">
          <p className="text-gray-600">
            These Terms and Conditions, along with privacy policy or other terms ("Terms") constitute a binding
            agreement by and between Ticketer, ("Website Owner" or "we" or "us" or "our") and you ("you" or
            "your") and relate to your use of our website, goods (as applicable) or services (as applicable)
            (collectively, "Services").
          </p>

          <div className="mt-6 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Agreement to Terms</h3>
              <p className="text-sm text-gray-600">
                By using our website and availing the Services, you agree that you have read and accepted these Terms
                (including the Privacy Policy). We reserve the right to modify these Terms at any time and without
                assigning any reason.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Key Terms:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <li>To access and use the Services, you agree to provide true, accurate and complete information.</li>
                <li>Your use of our Services and the website is solely at your own risk and discretion.</li>
                <li>The contents of the Website and the Services are proprietary to Us.</li>
                <li>You agree to pay us the charges associated with availing the Services.</li>
                <li>You agree not to use the website and/or Services for any unlawful purpose.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

