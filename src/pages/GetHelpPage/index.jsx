import { Card, CardHeader, CardTitle, CardContent, Input, Textarea, Button } from '@/shared/ui'

const GetHelpPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Need Help?</h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          If you have questions or run into issues, we're here to support you.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Contact Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
            </div>
            <Textarea className="resize-none" placeholder="Describe your issue or question..." rows={5} required />
            <Button type="submit" className="w-full sm:w-auto">
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default GetHelpPage
