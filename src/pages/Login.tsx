import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Get the appropriate email placeholder based on role
  const getEmailPlaceholder = () => {
    switch(role) {
      case 'Dean': return 'dean@pmu.edu.sa';
      case 'HR Manager': return 'hr@pmu.edu.sa';
      case 'Department Chair': return 'chair@pmu.edu.sa';
      case 'Interviewer': return 'interviewer@pmu.edu.sa';
      default: return 'email@pmu.edu.sa';
    }
  };

  const handleLogin = () => {
    console.log('Login attempted with:', { email, password, role });
    // Add your login logic here
  };

  // Get role-specific features
  const getRoleFeatures = () => {
    switch(role) {
      case 'Dean':
        return [
          'Review & Approve Requisitions',
          'Track Faculty Recruitment',
          'Manage College Hiring Pipeline'
        ];
      case 'HR Manager':
        return [
          'Post Job Requisitions to LinkedIn',
          'Manage Candidate Applications',
          'Schedule Interviews & Track Progress'
        ];
      case 'Department Chair':
        return [
          'Create Evaluation Committees',
          'Assign Candidates to Interviewers',
          'Monitor Committee Progress'
        ];
      case 'Interviewer':
        return [
          'Evaluate Assigned Candidates',
          'Submit Scoring & Feedback',
          'Track Evaluation Status'
        ];
      case 'Applicant':
        return [
          'Browse Open Positions',
          'Submit Applications',
          'Track Application Status'
        ];
      default:
        return [
          'Access Your Dashboard',
          'Manage Your Tasks',
          'View System Updates'
        ];
    }
  };

  const features = getRoleFeatures();

  // Get display names for title and portal
  const getDisplayTitle = () => {
    if (role === 'HR Manager') return 'HR';
    if (role === 'Department Chair') return 'Chair';
    return role;
  };

  const getPortalName = () => {
    if (role === 'HR Manager') return 'HR';
    if (role === 'Department Chair') return 'Committee Chair';
    return role;
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #001a3d 0%, #002952 50%, #001a3d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      
      {/* Login Card Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        width: '100%',
        maxWidth: '1400px',
        minHeight: '700px',
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)'
      }}>
        
        {/* Left Panel - Branding */}
        <div style={{
          background: 'linear-gradient(180deg, #002147 0%, #003366 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 3rem',
          color: 'white'
        }}>
          
          {/* Logo */}
          <div style={{ marginBottom: '3rem' }}>
            <img
              src="/pmu-logo.png"
              alt="PMU Logo"
              style={{ 
                width: '140px', 
                height: '140px', 
                objectFit: 'contain'
              }}
            />
          </div>

          {/* System Title */}
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: 1.3
          }}>
            Academic Hiring<br/>Management System
          </h2>

          {/* Portal Label */}
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            textAlign: 'center',
            color: '#93c5fd',
            marginBottom: '3rem',
            lineHeight: 1.2
          }}>
            {getPortalName()} Portal
          </h3>

          {/* Divider */}
          <div style={{
            width: '70%',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            marginBottom: '3rem'
          }}></div>

          {/* Feature Overview */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center',
            width: '100%',
            maxWidth: '400px'
          }}>
            {features.map((feature, index) => (
              <p key={index} style={{
                fontSize: '1.05rem',
                color: '#bfdbfe',
                textAlign: 'center',
                lineHeight: 1.5,
                margin: 0
              }}>
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div style={{
          backgroundColor: 'white',
          padding: '4rem 4.5rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          
          {/* Previous Button */}
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: '#6b7280',
              fontSize: '1rem',
              cursor: 'pointer',
              padding: '0.5rem 0',
              marginBottom: '2.5rem',
              fontFamily: 'inherit',
              alignSelf: 'flex-start'
            }}
          >
            <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
            Previous
          </button>

          {/* Title */}
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#002147',
            marginBottom: '0.75rem',
            lineHeight: 1.1
          }}>
            {getDisplayTitle()} Login
          </h2>

          <p style={{
            color: '#6b7280',
            fontSize: '1.125rem',
            marginBottom: '3rem'
          }}>
            Please login to your account
          </p>

          {/* Email Field */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              color: '#002147',
              fontSize: '1.05rem',
              fontWeight: '600',
              marginBottom: '0.75rem'
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={getEmailPlaceholder()}
              style={{
                width: '100%',
                padding: '1.125rem 1.25rem',
                fontSize: '1.05rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.75rem',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
                color: '#374151'
              }}
              onFocus={(e) => e.target.style.borderColor = '#002147'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '3rem' }}>
            <label style={{
              display: 'block',
              color: '#002147',
              fontSize: '1.05rem',
              fontWeight: '600',
              marginBottom: '0.75rem'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '1.125rem 1.25rem',
                  paddingRight: '3.5rem',
                  fontSize: '1.05rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                  color: '#374151'
                }}
                onFocus={(e) => e.target.style.borderColor = '#002147'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#6b7280'
                }}
              >
                {showPassword ? 
                  <EyeOff style={{ width: '1.25rem', height: '1.25rem' }} /> : 
                  <Eye style={{ width: '1.25rem', height: '1.25rem' }} />
                }
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '1.25rem',
              backgroundColor: '#002147',
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '0.875rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              fontFamily: 'inherit',
              marginBottom: '2rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#003366';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#002147';
            }}
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <div style={{ textAlign: 'center' }}>
            <a
              href="#"
              style={{
                color: '#002147',
                fontSize: '1.05rem',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.color = '#FF6C37';
                target.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.color = '#002147';
                target.style.textDecoration = 'none';
              }}
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}