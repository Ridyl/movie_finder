import useMediaQuery from './hooks/useMediaQuery';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

const options = [
	{
		value: 'imdb',
		label: 'IMDb Top 10',
	},
	{
		value: 'marvel',
		label: 'Marvel Top 10',
	},
	{
		value: 'gross',
		label: 'Top 10 Grossing',
	},
];

export default function ComboBox() {
	const [open, setOpen] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState(null);
	const isMobile = useMediaQuery();

	function DesktopMenu() {
		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant='outline' className='w-[150px] justify-start'>
						{selectedStatus ? <>{selectedStatus.label}</> : <>IMDb Top 10</>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[200px] p-0' align='start'>
					<StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
				</PopoverContent>
			</Popover>
		);
	}

	function MobileMenu() {
		return (
			<Drawer open={open} onOpenChange={setOpen} asChild>
				<DrawerTrigger asChild>
					<Button variant='outline' className='w-[150px] justify-center'>
						{selectedStatus ? <>{selectedStatus.label}</> : <>IMDb Top 10</>}
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<div className='mt-4 border-t'>
						<StatusList
							setOpen={setOpen}
							setSelectedStatus={setSelectedStatus}
						/>
					</div>
				</DrawerContent>
			</Drawer>
		);
	}

	function StatusList({ setOpen, setSelectedStatus }) {
		return (
			<Command>
				<CommandList>
					<CommandGroup>
						{options.map((group) => (
							<CommandItem
								className='h-18'
								key={group.value}
								value={group.value}
								onSelect={(value) => {
									setSelectedStatus(
										options.find((title) => title.value === value) || null
									);
									setOpen(false);
								}}
							>
								{group.label}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</Command>
		);
	}

	return <>{isMobile !== 'desktop' ? <MobileMenu /> : <DesktopMenu />}</>;
}
