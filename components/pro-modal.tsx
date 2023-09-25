'use client'

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge";
import { MessageSquare, Music, ImageIcon, VideoIcon, Code, Check, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
    },
    {
        label: "Music Generation",
        icon: Music,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-500/10',
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: 'text-pink-700',
        bgColor: 'bg-pink-700/10',
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: 'text-orange-500',
        bgColor: 'bg-orange-500/10',

    },
    {
        label: "Code Generation",
        icon: Code,
        color: 'text-green-500',
        bgColor: 'bg-green-500/10',

    },

]


export const ProModal = () => {
    const proModal = useProModal();
    const [loading, setLoading] = useState(false)

    const onSubscribe = async () => {
        try {
            setLoading(true)
            const response = await axios.get('/api/stripe')

            window.location.href = response.data.url
        } catch (error) {
            console.log(error, "STRIPE_CLIENT_ERROR")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">

                            Upgrade to Genuis
                            <Badge className="uppercase text-sm py-1 " variant='premium'>
                                Pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between "
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                    <Check className="text-primary w-5 h-5 " />
                                </div>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        onClick={onSubscribe}
                        className='w-full'
                        variant='premium'
                        size='lg'>
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}