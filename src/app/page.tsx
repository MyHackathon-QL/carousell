import * as React from "react"

import {Card, CardContent} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import {Button} from "@/components/ui/button"

export default function Page(){
  return(
    <>
    <div className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <button>
              <img
              src="/placeholder.svg"
              width={600}
              height={600}
              alt="Product Image"
              className="aspect-square object-cover rounded-t-lg"
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3>Acme Prisme</h3>
                </div>
              </div>
            </button>
          </Card>
        </div>
      </div>
    </div>
    <Carousel className=" w-full mx-auto max-w-xs">
      <CarouselContent className="flex justify-center items-center">
        {Array.from({length: 5}).map((_,index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        )

        )}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
    </>
  )
}