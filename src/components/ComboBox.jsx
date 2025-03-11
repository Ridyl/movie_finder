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
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRef, useState } from 'react';
import TopTen from './TopTen';

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
		const buttonRef = useRef();
		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger>
					<Button
						variant='outline'
						className='w-[150px] justify-start'
						ref={buttonRef}
					>
						{selectedStatus ? <>{selectedStatus.label}</> : <>IMDb Top 10</>}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-[150px] p-0' align='start'>
					<StatusList
						setOpen={setOpen}
						setSelectedStatus={setSelectedStatus}
						height='h-10'
					/>
				</DropdownMenuContent>
			</DropdownMenu>
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
							height='h-18'
						/>
					</div>
				</DrawerContent>
			</Drawer>
		);
	}

	function StatusList({ setOpen, setSelectedStatus, height }) {
		return (
			<Command>
				<CommandList>
					<CommandGroup>
						{options.map((group) => (
							<CommandItem
								className={height}
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

	return (
		<div className='mt-5'>
			<div className='flex justify-center mb-4'>
				{isMobile !== 'desktop' ? <MobileMenu /> : <DesktopMenu />}
			</div>
			<div className='flex flex-wrap justify-around'>
				<TopTen
					movieCat={selectedStatus == null ? 'imdb' : selectedStatus.value}
				/>
			</div>
		</div>
	);
}
