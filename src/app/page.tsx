import * as React from "react"

import {Card, CardContent} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import {Button} from "@/components/ui/button"

export default function Page(){
  return(
    <>
    <div className="flex flex-col items-center w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl w-full flex gap-8">
        <Card className="flex-1">
          <button>
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Product Image"
              className="aspect-square object-cover rounded-t-lg"
            />
          </button>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Acme Prisme</h3>
              <p className="text-gray-500 dark:text-gray-400">$49.99</p>
            </div>
            <Button size="sm">Preview</Button>
          </div>
        </Card>
        <Card className="flex-1">
          <button>
            <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Product Image"
              className="aspect-square object-cover rounded-t-lg"
            />
          </button>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Acme Prisme</h3>
              <p className="text-gray-500 dark:text-gray-400">$49.99</p>
            </div>
            <Button size="sm">Preview</Button>
          </div>
          </Card>
        <Card className="flex-1">

          <Carousel className="flex mx-auto max-w-xs mb-2 mt-2">
            <CarouselContent className="flex justify-center items-center">
              {Array.from({length: 5}).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>

          <Carousel className="flex mx-auto max-w-xs mb-2 ">
            <CarouselContent className="flex justify-center items-center">
              {Array.from({length: 5}).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>

        </Card>
      </div>
    </div>
    </>
  )
}