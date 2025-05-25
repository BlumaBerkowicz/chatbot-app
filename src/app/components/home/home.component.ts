import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

// PrimeNG imports
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
  isError?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
    ProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  messages: ChatMessage[] = [
    {
      content: 'Hello! How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ];
  
  newMessage: string = '';
  isLoading: boolean = false;

  constructor(private chatService: ChatService) {}

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim() && !this.isLoading) {
      this.messages.push({
        content: this.newMessage,
        isUser: true,
        timestamp: new Date()
      });

      const userMessage = this.newMessage;
      this.newMessage = '';
      this.isLoading = true;

      this.scrollToBottom();

      this.chatService.sendMessage(userMessage).subscribe({
        next: (response) => {
          console.log('Received response:', response); // Debug log
          this.messages.push({
            content: response,
            isUser: false,
            timestamp: new Date()
          });
          this.scrollToBottom();
        },
        error: (error) => {
          console.error('Error sending message:', error);
          this.messages.push({
            content: 'Sorry, there was an error processing your message. Please try again.',
            isUser: false,
            timestamp: new Date(),
            isError: true
          });
          this.scrollToBottom();
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch(err) { }
    }, 100);
  }
}
